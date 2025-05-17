import logo from "./kb-logo.png";
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
          <Dictionary defaultKeyword="umbrella" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Khalipa Baba and is open-sourced on{" "}
            <a
              href="https://github.com/Khalipa-B/my-dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://khalipa-dictionary-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
