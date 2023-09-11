import { Link } from "react-router-dom";
import "./post.css";
import moment from "moment/moment";

export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={`https://blog-backend-6gsn.onrender.com/Images/${post?.photo}`}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post?.category.map((e) => {
            return (
              <span className="postCat">
                {e?.catename}
                {/* <Link className="link" to="/posts?cat=Music"> */}

                {/* </Link> */}
              </span>
            );
          })}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post?._id}`} className="link">
            {post?.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {moment(post?.createdAt).format("MMM Do YY")}
        </span>
      </div>
      <p className="postDesc">{post?.desc}</p>
    </div>
  );
}
