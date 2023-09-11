import Post from "../post/Post";
import "./posts.css";

export default function Posts({ items }) {
  return (
    <div className="posts">
      {items.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
}
