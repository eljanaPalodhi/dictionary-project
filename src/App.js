import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/eljanaPalodhi/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          Coded by Eljana Palodhi{" "}
          <a
            href=" https://eljana-dictionary-project.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
