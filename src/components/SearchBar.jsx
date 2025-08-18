import React from "react";
import { useState } from "react";


export const SearchBar = () => {
  const [query, setQuery] = useState(""); 

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Please enter a search term"); 
      return;
    }
    console.log("Searching for:", query);
  };
  return (
  <div className="flex flex-col items-center mt-5 space-y-3">
      <input
        className="border border-gray-400 rounded-xl p-3 w-6/12"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="mt-4 bg-[#16247D] text-white font-semibold text-sm w-1/12 py-3 rounded-lg transition duration-300 hover:bg-blue-900"
        onClick={handleSearch}
      >
        SEARCH
      </button>
    </div>

  );
};
