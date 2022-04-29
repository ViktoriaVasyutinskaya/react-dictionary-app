import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary APP</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>Coded by V.Vasyutinskaya</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
