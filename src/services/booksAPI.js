
export const searchBooks = async (query) => {
  try {
    const cleanQuery = query.trim();
    console.log("Searching for:", cleanQuery);

    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(cleanQuery)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.status}`);
    }

    const data = await response.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
