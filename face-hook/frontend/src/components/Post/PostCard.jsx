import React, { useState } from "react";
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

function PostCard({ post }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostAction post={post} setShowComments={setShowComments} />
      {showComments && <PostComments post={post} />}
    </article>
  );
}

export default PostCard;
