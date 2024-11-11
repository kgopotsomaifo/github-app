import React from "react";

// component for repoInfo that takes 'repos' as a prop
const RepoInfo = ({ repos }) => {
  return (
    <div>
      <h2>Recent Repositories</h2>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>
            <h3>Repo Name: {repo.name}</h3>
            <p>Description: {repo.description}</p>
            <p>Created at: {repo.created_at}</p>
            <p>Last updated at: {repo.updated_at}</p>
            <h4>Recent Commits:</h4>
            <ol>
              {repo.commits.map((commit, commitIndex) => (
                <li key={commitIndex}>{commit.message}</li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoInfo;
// repo.commits.map((commit, commitIndex)

/* <ol key={commitIndex}>{commit.message}</ol> */
