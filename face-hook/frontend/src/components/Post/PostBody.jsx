import React from "react";

function PostBody({ post }) {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      {/* If Post has Image, Render this block */}
      <div className="flex items-center justify-center overflow-hidden">
        <img
          className="max-w-full"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${post?.image}`}
          alt="poster"
        />
      </div>
      <p>{post?.content ?? "No content available."}</p>
    </div>
  );
}

export default PostBody;
