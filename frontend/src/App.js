import React, { useState } from "react";
import "./App.css";
import SearchBox from "./components/Search";
import UserInfo from "./components/UserInfo";
import RepoInfo from "./components/RepoInfo";

function App() {
  // Initialize state variables for the user and their repositories
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Define a function to handle the search for a GitHub user
  const handleSearch = async (username) => {
    setLoading(true);
    setMessage("");
    try {
      // Send a request to the server to fetch user data based on the entered username
      const response = await fetch(`/api/search/${username}`);
      if (response.ok) {
        // If the response is successful, parse the data and update states
        const data = await response.json();
        console.log(data);
        const user_details = {
          username: data.username,
          bio: data.bio,
          profile_picture: data.profile_picture,
          profile_url: data.profile_url,
        };
        console.log(user_details);
        setUser(user_details);
        setRepos(data.recent_repos);
        setLoading(false);
      } else if (!response.ok) {
        setMessage("No user found");
        setLoading(false);
      } else {
        // If the response is not successful, reset states
        setUser(null);
        setRepos([]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error); // error handler
    }
  };

  return (
    <div className="App">
      {/* Display a heading for the application */}
      <h1>Github User Search</h1>
      {/* Render the SearchBox component and pass the 'handleSearch' function as a prop */}
      <SearchBox onSearch={handleSearch} loading={loading} />
      {message}
      {/* Render the UserInfo component if user data is available */}
      {user && <UserInfo user={user} />}
      {/* Render the RepoInfo component if there are repositories to display */}
      {repos.length > 0 && <RepoInfo repos={repos} />}
    </div>
  );
}

export default App;
