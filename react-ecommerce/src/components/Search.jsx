import React, { useEffect, useState } from "react";
import { useShop } from "../context/GlobalContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

function Search() {
  const { search, setSearch, showSearch, setShowSearch } = useShop();
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    setVisible(path.includes("collections"));
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center mb-3">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
}

export default Search;
