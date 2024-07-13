import React, { useEffect, useState } from "react";
import { MENU, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";

import { cacheResults } from "../utils/searchSlice";


const Header = () => {
  const dispatch = useDispatch();
  const searchCache=useSelector(store=>store.search);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);

  /**
   * searchCache ={
   * "iphone"=["iphone","iphone 14"]
   * 
   * }
   * 
   * searchQuery=iphone
   */

  useEffect(() => {
    //API CALL
    console.log(searchQuery);
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
      getSearchSuggestions()}
  }, 200);

    return () => {
      clearTimeout(timer);
    };

    //DEBOUNCING- make an api call after every key press but if the difference between 2 keystrokes is <200ms -DECLINE the API call
  }, [searchQuery]);

  /**
   *
   * key- i
   *  - render the component
   *  - call UseEffect
   *  -start timer =>make API call after 200ms
   *
   *
   *
   * key- ip
   *  -destroy the component( useEffect return method called)
   *  - re- render the component
   *  - call useEffect as it is dependent on searchQuery
   *  -start timer =>make API call after 200ms (new timer)
   *
   *
   *
   */
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);

    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
       
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Menu"
        />
    
        <img
          className="h-8 mx-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="YouTube Logo"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2  p-2 border border-gray-400 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setshowSuggestions(true)}
            onBlur={()=>setshowSuggestions(false)}
       

          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
      { showSuggestions && (<div className=" absolute bg-white py-2 px-5 ml-1 w-[25rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s) => (
              <li key={s} className="shadow-sm py-2 hover:bg-gray-100 ">
                {s}
              </li>
            ))}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
