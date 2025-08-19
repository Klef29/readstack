import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = useState(false);

  // this function will receive results from SearchBar
  const handleSearchResults = (results) => {
    setBooks(results); // this will update state
    setSearched(true);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <h1 className="font-bold text-3xl text-center mt-10 font-playfair">
        Unlock the World Through Books
      </h1>
      <p className="text-center mt-2 font-inter text-xl">
        Dive into stories and ideas that spark curiosity and growth.
      </p>

      {/* the SearchBar goes here */}
      <SearchBar onSearchResults={handleSearchResults} />

      {/* Show SEARCH RESULTS when we have books */}
      {searched && books.length > 0 && (
        <p className="mt-2 text-left w-full max-w-2xl text-sm font-bold text-gray-900">
          SEARCH RESULTS
        </p>
      )}

      {/* Show a message if no books are found after search */}
      {searched && books.length === 0 && (
        <p className="text-gray-500 font-inter mt-5">
          No books found. Try searching!
        </p>
      )}

      {/* Showing the book results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-10/12 lg:w-8/12 py-5">
        {books.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
