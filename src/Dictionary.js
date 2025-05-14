import React, { useState } from "react";
import "./Dictionary.css";

function Dictionary() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add logic to fetch and display dictionary results here
  };

  return (
    <div className="dictionary">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
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
