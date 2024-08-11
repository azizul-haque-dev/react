import React from "react";

function Search({ search, setSearch, handleSearch }) {
  return (
    <form className="formContainer" onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search City...."
        className="inputSearch"
      />
      <button type="submit"> Search</button>
    </form>
  );
}

export default Search;
