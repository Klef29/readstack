import React, { useState } from "react";
import { searchBooks } from "../services/booksAPI";

export const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    try {
      setLoading(true); // Start loading
      const results = await searchBooks(query);
      onSearchResults(results);
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center mt-5 w-full">
      {/* Make input field longer */}
      <input
        className="border border-gray-400 rounded-xl p-3 w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading} // Disable typing while loading
      />

      {/* Keep button neat and centered */}
      <button
        className="mt-4 bg-[#16247D] text-white font-semibold text-sm w-1/12 md:w-1/12 sm:w-1/12 py-3 rounded-lg transition duration-300 hover:bg-blue-900 disabled:opacity-50"
        onClick={handleSearch}
        disabled={loading} // Disable button while loading
      >
        {loading ? "Loading..." : "SEARCH"}
      </button>
    </div>
  );
};
