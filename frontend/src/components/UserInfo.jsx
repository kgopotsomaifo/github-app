import React from "react";

const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      <img src={user.profile_picture} alt={`${user.username}'s avatar`} />
      <p>
        <a href={user.profile_url}>Profile Link: </a>{" "}
      </p>

      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserInfo;
