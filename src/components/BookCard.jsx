
const BookCard = ({ book }) => {
  // Open Library book covers: https://covers.openlibrary.org/b/id/{coverId}-M.jpg
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
      <div className="border rounded-lg shadow p-3 w-48 transform hover:scale-105 transition-transform duration-200">
              <img src={coverUrl} alt={book.title} className="w-full h-64 object-cover rounded" />
              <h3 className="font-semibold mt-2 text-sm">{book.title}</h3>
              <p className="text-gray-600 text-xs">
                  {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
              </p>
              <p className="text-gray-500 text-xs">{book.first_publish_year || "N/A"}</p>
          </div>
  );
};

export default BookCard;
