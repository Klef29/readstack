import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = useState(false);

  // handle search results from SearchBar
  const handleSearchResults = (results) => {
    setBooks(results);
    setSearched(true);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-5 md:pt-12 lg:pt-16 pb-10 px-4 sm:px-6 md:px-8">
      {/* Hero Section */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mt-6 font-playfair leading-snug">
        Unlock the World Through Books
      </h1>
      <p className="text-center mt-3 font-inter text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
        Dive into stories and ideas that spark curiosity and growth.
      </p>

      {/* SearchBar */}
      <div className="w-full mt-6 sm:mt-8">
        <SearchBar onSearchResults={handleSearchResults} />
      </div>

      {/* Search Results Label */}
      {searched && books.length > 0 && (
        <p className="mt-4 text-left w-full max-w-5xl text-sm sm:text-base font-bold text-gray-900 px-2">
          SEARCH RESULTS
        </p>
      )}

      {/* Empty Search Message */}
      {searched && books.length === 0 && (
        <p className="text-gray-500 font-inter mt-6 text-sm sm:text-base">
          No books found. Try searching!
        </p>
      )}

      {/* Book Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}


export default Home;
