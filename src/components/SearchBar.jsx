import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery) {
      const found = window.find(searchQuery); // Use browser's find method
      if (!found) {
        alert("Word not found");
      }
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control form-control-dark text-bg-dark"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <center>
        <button onClick={handleSearch} className="mt-1 btn btn-secondary">
          Find
        </button>
      </center>
    </div>
  );
};

export default SearchBar;
