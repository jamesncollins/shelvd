import { ReactElement, useState, useEffect } from "react";
import { Book } from "../types/Book";
import "./BookList.css";

export default function BookList(): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("error fetching books", error);
      }
    })();
  }, []);

  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map((book) => (
        <li key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>{book.description}</p>
          <p>Published: {book.yearPublished}</p>
        </li>
      ))}
    </div>
  );
}
