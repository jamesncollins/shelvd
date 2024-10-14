import express from "express";
import fs from "fs";

export default function Server() {
  const app = express();
  app.use(express.json());

  const loadBooks = () => {
    const data = fs.readFileSync("mockData.json", "utf-8");
    return JSON.parse(data);
  };

  const saveBooks = (books) => {
    fs.writeFileSync("mockData.json", JSON.stringify(books, null, 2), "utf-8");
  };

  app.get("/books", (req, res) => {
    res.json(loadBooks());
  });

  app.get("/books/:id", (req, res) => {
    const queryId = parseInt(req.params.id);
    const books = loadBooks();
    const book = books.find((book) => book.id === queryId);
    if (!book) {
      res.sendStatus(404).json({ message: `Book with ${queryId} not found.` });
      return;
    }
    res.json(book);
  });

  app.post("/books/add", (req, res) => {
    const books = loadBooks();
    const newBook = {
      id: books[books.length - 1].id + 1,
      title: req.body.title,
      author: req.body.author,
    };
    const newBooks = [...books, newBook];
    saveBooks(newBooks);
    res.json(newBook);
  });

  app.post("/books/update/:id", (req, res) => {
    const queryId = parseInt(req.params.id);
    const books = loadBooks();
    const bookIndex = books.findIndex((book) => book.id === queryId);
    books[bookIndex] = {
      id: queryId,
      title: req.body.title,
      author: req.body.author,
    };
    saveBooks(books);
    res.json(books[bookIndex]);
  });

  app.get("/books/delete/:id", (req, res) => {
    const queryId = parseInt(req.params.id);
    const books = loadBooks();
    const newList = books.filter((book) => book.id !== queryId);
    saveBooks(newList);
    res.json(newList);
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
