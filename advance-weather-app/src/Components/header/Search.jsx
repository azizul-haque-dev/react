import { useContext, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { LocationContext } from "../../context/index";
import { getLocationByName } from "../../data/location.data";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { setSelectedLocation } = useContext(LocationContext);
  
const doSearch = useDebounce((query)=>{
 const fetchedLocation = getLocationByName(query);
    setSelectedLocation({ ...fetchedLocation });
   
},500)

  function handleChange(e){
    const value = e.target.value;
    searchQuery(value)
    doSearch(value)
  }

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          required
          onChange={handleChange}
        />
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
}

export default Search;
