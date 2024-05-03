import { createContext, useEffect, useReducer, useState } from "react";

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
  fetching: Boolean,
});
const postListReducer = (currentPostList, action) => {
  let newPostlist = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostlist = currentPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_POST") {
    newPostlist = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_Initial_POSTS") {
    newPostlist = action.payload.posts;
  }
  return newPostlist;
};
const PostListProvider = ({ children }) => {
  const [posts, dispachPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    // console.log(`${userId} ${title} ${body} ${reactions} ${tags}`);
    const value = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userid: userId,
        tags: tags,
      },
    };
    dispachPostList(value);
  };
  const addInitialPosts = (posts) => {
    // console.log(`${userId} ${title} ${body} ${reactions} ${tags}`);
    const value = {
      type: "ADD_Initial_POSTS",
      payload: {
        posts,
      },
    };
    dispachPostList(value);
  };

  const deletePost = (id) => {
    console.log(id);
    const value = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispachPostList(value);
  };

  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Postlist.Provider
      value={{
        postList: posts,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts: addInitialPosts,
        fetching: fetching,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};
export default PostListProvider;
