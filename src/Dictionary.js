import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    alert(`Word: ${response.data[0].word}`);
    alert(
      `Definition: ${response.data[0].meanings[0].definitions[0].definition}`
    );
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${searchTerm}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <h1>Dictionary App</h1>
      <form onSubmit={handleResponse}>
        <input
          type="text"
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default Dictionary;
