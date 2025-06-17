import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import PostCommentList from "./PostCommentList";

function PostComments({ post }) {
  const { auth } = useAuth();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post?.comments);
  const { api } = useAxios();
  async function handleComment(e) {
    if (e.key === "Enter" && comment.length) {
      console.log(comment);
      const res = await api.patch(`/posts/${post.id}/comment`, { comment });
      if (res.status === 200) {
        setComments(res.data.comments);
        setComment("");
      }
    }
  }

  return (
    <div>
      {/* comment input box */}
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`}
          alt="avatar"
        />
        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => handleComment(e)}
            placeholder="What's on your mind?"
          />
        </div>
      </div>

      <div className="mt-4">
        <button className="text-gray-300 max-md:text-sm">All Comment ▾</button>
      </div>

      <PostCommentList comments={comments} />
    </div>
  );
}

export default PostComments;
