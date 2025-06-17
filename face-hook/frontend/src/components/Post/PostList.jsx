import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <div>
      {posts && posts.map((post) => <PostCard post={post} key={post.id} />)}
    </div>
  );
}

export default PostList;
