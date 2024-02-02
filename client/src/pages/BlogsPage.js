import Post from "../partials/Post";
import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}
    </div>
  );
}
