import "./App.css";
// import BookList from "./components/BookList/BookList";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TicTacToe />
        {/* <BookList /> */}
      </header>
    </div>
  );
}

export default App;
