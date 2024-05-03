import { useContext, useEffect, useState } from "react";
import Cards from "./Cards";
import { Postlist } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
const CardsList = () => {
  const { postList, addInitialPosts, fetching } = useContext(Postlist);

  // const handleGetPostClick = (e) => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };
  if (fetching) {
    return <LoadingSpinner />;
  } else if (postList.length === 0) {
    return <Welcome></Welcome>;
  } else {
    return (
      <>
        {postList.map((post) => (
          <Cards post={post} key={post.id}></Cards>
        ))}
      </>
    );
  }
};

export default CardsList;
