const express = require("express");
const helmet = require("helmet");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// Use Helmet!
app.use(helmet());
app.use(express.json()); // parse json requests

// variable to hold base url
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

app.get("/api/search/:username", async (req, res) => {
  try {
    //user information from GitHub API
    const query = req.params.username;
    const response = await githubApi.get(`users/${query}`);
    const { login, avatar_url, bio, html_url } = response.data;
    // repo information
    const repoResponse = await githubApi.get(`users/${query}/repos`);
    // Extract relevant information from fetched repositories
    const recentRepos = repoResponse.data.slice(0, 5).map((repo) => ({
      name: repo.name,
      description: repo.description,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
    }));

    // Fetch the commit messages for each repo
    const commitMessagesPromises = recentRepos.map(async (repo) => {
      const commitsData = await githubApi.get(
        `repos/${query}/${repo.name}/commits`
      );
      repo.commits = commitsData.data.slice(0, 5).map((commit) => ({
        message: commit.commit.message,
      }));
      return repo;
    });

    // Wait for all commit messages to be fetched
    const reposWithCommits = await Promise.all(commitMessagesPromises);
    const responseData = {
      username: login,
      profile_picture: avatar_url,
      profile_url: html_url,
      bio: bio,
      recent_repos: reposWithCommits,
    };
    res.json(responseData);
    console.log(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
});
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
