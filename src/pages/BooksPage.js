


import React, { useState, useEffect } from 'react';
import getBooks from '../api/books';
import BasePage from '../components/BasePage';


const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) return <BasePage version='1.1'><div>Loading...</div></BasePage>;
  if (error) return <div>Error: {error}</div>;

  return (
    <BasePage version="1.1">
    <div>
      <h1>Books:</h1>
      {/* {books ? <h1>{JSON.stringify(books)}</h1> : <h1>No Available Posts</h1>} */}
      {books ? books.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
        </div>
      )): <h1>No Available Posts</h1>}
    </div>
    </BasePage>
  );
}

export default BooksPage;
