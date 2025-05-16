import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    if (response.data && response.data.length > 0) {
      console.log(response.data[0]);
      setResults(response.data[0]);
    } else {
      console.error("No results found.");
      setResults(null);
    }
  }

  function search(event) {
    event.preventDefault();
    if (keyword.trim() === "") {
      alert("Please enter a word to search.");
      return;
    }
    // API documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Sorry, we couldn't find the word. Please try again.");
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={handleKeywordChange}
        />
        <button type="submit">Search</button>
      </form>
      {results && <Results results={results} />}
    </div>
  );
}
