import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../services/booksAPI";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const workId = id.replace("/works/", ""); // clean up ID if it includes /works/
      const data = await getBookDetails(workId);
      setBook(data);
    };
    fetchDetails();
  }, [id]);

  if (!book) {
    return <p className="text-center mt-10">Loading book details...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Description:</strong>{" "}
        {book.description
          ? typeof book.description === "string"
            ? book.description
            : book.description.value
          : "No description available."}
      </p>
      <p className="text-gray-600">
        <strong>First Published:</strong>{" "}
        {book.first_publish_date || "Unknown"}
      </p>
    </div>
  );
}

export default BookDetails;
