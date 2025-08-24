
export const searchBooks = async (query) => {

  // Validate the search query
  try {
    const cleanQuery = query.trim();
    console.log("Searching for:", cleanQuery);

    // Fetch data from Open Library Search API
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(cleanQuery)}`
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
