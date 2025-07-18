import React, { useState } from "react";
import "./CaseSearch.css";
const CaseSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Please enter a search term.");
      return;
    }
    // Mock search logic
    setResults(["Case 1: ABC vs XYZ", "Case 2: MNO vs PQR"]);
  };

  return (
    <div className="case-search-container">
      <h2>Search Case Laws</h2>
      <input
        type="text"
        placeholder="Enter case keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaseSearch;
