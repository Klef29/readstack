import React, { useState } from "react";
import { searchBooks } from "../services/booksAPI";

export const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    try {
      setLoading(true);
      const results = await searchBooks(query);
      onSearchResults(results);
    } catch (error) {
      console.error("Error searching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-1 w-full px-4">
      {/* Responsive input field */}
      <input
        className="border border-gray-400 rounded-xl p-3 w-full sm:w-8/12 md:w-6/12 lg:w-5/12"
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
      />

      {/* Responsive button */}
      <button
        className="mt-6 bg-[#16247D] text-white font-semibold text-sm w-full sm:w-4/12 md:w-3/12 lg:w-2/12 py-3 rounded-lg transition duration-300 hover:bg-blue-900 disabled:opacity-50"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? "Loading..." : "SEARCH"}
      </button>
    </div>
  );
};
