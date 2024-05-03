import { useContext, useRef } from "react";
import { Postlist } from "../store/post-list-store";

const Forms = () => {
  const { addPost } = useContext(Postlist);
  const postTitle = useRef();
  const postBody = useRef();
  const postUserId = useRef();
  const postReactions = useRef();
  const postTags = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    var userId = postUserId.current.value;
    var title = postTitle.current.value;
    var body = postBody.current.value;
    var reactions = postReactions.current.value;
    var tags = postTags.current.value.split(" ");

    addPost(userId, title, body, reactions, tags);
    postUserId.current.value = "";
    postTitle.current.value = "";
    postBody.current.value = "";
    postReactions.current.value = "";
    postTags.current.value = "";
  };
  return (
    <form className="ps-5 pt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="postUserId" className="form-label">
          User-Id
        </label>
        <input
          type="text"
          className="form-control"
          id="postUserId"
          ref={postUserId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="posttitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="posttitle"
          ref={postTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postbody" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          className="form-control"
          id="postbody"
          ref={postBody}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postReactions" className="form-label">
          Number of people reacted to this post
        </label>
        <input
          type="number"
          className="form-control"
          id="postReactions"
          ref={postReactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTags" className="form-label">
          Tags (Please enter tags seperated by spaces)
        </label>
        <input
          type="text"
          className="form-control"
          id="postTags"
          ref={postTags}
        />
      </div>
      {/* <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div> */}
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Forms;
