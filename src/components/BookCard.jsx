import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  // book.key looks like "/works/OL12345W"
  const workId = book.key.split("/").pop();

  return (
    <Link to={`/book/${workId}`}>
      <div className="border rounded-lg shadow p-3 
                      w-40 sm:w-48 md:w-56 lg:w-64 
                      transform hover:scale-105 
                      transition-transform duration-200 cursor-pointer
                      bg-white">
        
        {/* Book Cover */}
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-56 sm:h-64 md:h-72 lg:h-80 
                     object-cover rounded"
        />

        {/* Book Title */}
        <h3 className="font-semibold mt-2 
                       text-xs sm:text-sm md:text-base lg:text-lg 
                       truncate">
          {book.title}
        </h3>

        {/* Author(s) */}
        <p className="text-gray-600 
                      text-[10px] sm:text-xs md:text-sm 
                      truncate">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>

        {/* Year */}
        <p className="text-gray-500 
                      text-[10px] sm:text-xs md:text-sm">
          {book.first_publish_year || "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
