import "./App.css";
import Dictionary from "./Dictionary";
import logo1 from "./logo1.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo1} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="program" />
        </main>
        <footer>
          <small>Coded by V.Vasyutinskaya</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
