import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Words for everything</h1>
        </header>
        <Dictionary defaultKeyword="story" />
        <footer>
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/carolina-genoveva-echevarría-aguilar"
              target="_blank"
              rel="noreferrer"
            >
              Carolina Echevarria <i className="fab fa-linkedin"></i>
            </a>
            <br />
            <a
              href="https://github.com/caro-echevarria/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced <i className="fab fa-github"></i>
            </a>{" "}
            and{" "}
            <a
              href="https://sad-bell-670b33.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted at Netlify{" "}
              <span
                className="iconify"
                data-icon="simple-icons:netlify"
                data-inline="false"
              ></span>
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
