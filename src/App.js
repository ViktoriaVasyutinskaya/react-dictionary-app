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
          <Dictionary defaultKeyword="sun" />
        </main>
        <footer>
          <small>
            <a
              href="https://github.com/ViktoriaVasyutinskaya/react-dictionary-app"
              id="openSource"
              rel="noopener noreferrer"
              target="_blank"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://boisterous-sorbet-49c0e1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              id="netlify"
            >
              hosted on Netlify
            </a>{" "}
            by V.Vasyutinskaya
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
