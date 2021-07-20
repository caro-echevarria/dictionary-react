import React, { useState } from "react";
import "./Search.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of "${keyword}".`);
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
    </div>
  );
}
