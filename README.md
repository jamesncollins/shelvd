# Shelvd

If you open `web/src/components` you can find some examples of frontend components.

- `TicTacToe`: a game of tic tac toe.

## Web app

To run the full stack app, run `npm start` in the root directory.

On `localhost:3000` you can send the following requests:

- `GET /books` to get all books
- `GET /books/:id` to get book with `id`
- `POST /books/add` with a JSON body to add a new book
- `POST /books/update/:id` with a JSON body to update a new book
- `GET /books/delete/:id` to delete a book with `id`

To run the front end, run `npm start` in the `web` directory.
