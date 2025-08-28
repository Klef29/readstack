import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
    const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <p className="text-center mt-10">Loading book details...</p>;
  }

  // Check if a cover image exists
  const coverId = book.covers ? book.covers[0] : null;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/300x400?text=No+Cover";

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white ">
         {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded hover:bg-gray-100 transition"
      >
        ← Back
      </button>
      {/* Book Image */}
      <div className="flex justify-center mb-6">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-60 h-80 object-cover rounded-lg shadow"
        />
      </div>

      {/* Book Details */}
      <h2 className="text-3xl font-bold mb-4">{book.title}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span>{" "}
        {book.description
          ? typeof book.description === "string"
            ? book.description
            : book.description.value
          : "No description available."}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">First Published:</span>{" "}
        {book.first_publish_date || "Unknown"}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Subjects:</span>{" "}
        {book.subjects ? book.subjects.join(", ") : "N/A"}
      </p>
    </div>
  );
};

export default BookDetails;
