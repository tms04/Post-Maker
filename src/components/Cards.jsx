import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlist } from "../store/post-list-store";
// import { AiOutlineDelete } from "react-icons/ai";

const Cards = ({ post }) => {
  const { deletePost } = useContext(Postlist);
  return (
    <div className="card m-4" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span className="badge text-bg-info ms-1" key={`${post.id + tags}`}>
            {tags}
          </span>
        ))}
        <div className="alert alert-success mt-2" role="alert">
          This post is reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};

export default Cards;
