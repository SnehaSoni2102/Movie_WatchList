import React from "react";
import "../styles/styles.css"

export const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        className="border border-black rounded-md p-1 h-[30px] w-[300px] md:w-[500px] placeholder"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="www.your-website.com"
      />
    </div>
  );
};
