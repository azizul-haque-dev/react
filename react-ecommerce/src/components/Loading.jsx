import React from "react";

function Loading() {
  return (
    <div className="space-y-4 p-4">
      {/* <!-- Title Skeleton --> */}
      <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>

      {/* <!-- Image Skeleton --> */}
      <div className="h-48 bg-gray-300 rounded-md"></div>

      {/* <!-- Text Skeletons --> */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded-md w-4/6"></div>
      </div>
    </div>
  );
}

export default Loading;
