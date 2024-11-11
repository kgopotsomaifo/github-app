import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";

// Define a functional component called SearchBox
const SearchBox = ({ onSearch, loading }) => {
  // Initialize a state variable username
  const [username, setUsername] = useState("");

  // function to handle the search button click
  const handleSearch = () => {
    // pass username variable into onSearch prop
    onSearch(username);
  };

  return (
    <div>
      {/* Input field for entering a GitHub username  */}
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        // Update username state when the input value changes
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* Button to trigger the search with loading icon to indicate the data is being fetched*/}
      {loading ? "" : <button onClick={handleSearch}>Search</button>}
      {loading ? (
        <div>
          {" "}
          <FiLoader />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBox;
