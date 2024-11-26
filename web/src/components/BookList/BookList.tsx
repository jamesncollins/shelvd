import { ReactElement, useState, useEffect } from "react";
import "./BookList.css";
import { Book } from "../../types/Book";

export default function BookList(): ReactElement {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/books");
        const data = await response.json();
        console.log(data[0]);
        setBooks(data);
      } catch (error) {
        console.error("error fetching books", error);
      }
    })();
  }, []);

  return (
    <div className="book-wrapper">
      <h2>Book List</h2>
      <div className="book-list">
        {books
          .filter((_, i) => i < 3)
          .map((book) => (
            <li key={book.id} className="book-item">
              <h3>{book.title}</h3>

              <p>{book.author}</p>
              <p>{book.yearPublished}</p>
            </li>
          ))}
      </div>
    </div>
  );
}
