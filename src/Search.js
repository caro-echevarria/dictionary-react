import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search"
          autoFocus="on"
          onChange={handleKeywordChange}
        />
        <button type="Submit" id="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}