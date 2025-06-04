import heart from "../../assets/heart.svg";
import React from "react";
function AddToFavourite() {
  console.log("add to favourite");
  return (
    <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
      <span>Add to Favourite</span>
      <img src={heart} alt="" />
    </button>
  );
}

export default React.memo(AddToFavourite);
