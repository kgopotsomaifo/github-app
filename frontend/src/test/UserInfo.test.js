import React from "react";
import UserInfo from "../components/UserInfo";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

//Snapshot test for the single user card:
test("Renders User Info correctly", () => {
  const user = {
    username: "kgopotsomaifo",
    profile_picture: "https://avatars.githubusercontent.com/u/110554055?v=4",
    profile_url: "https://github.com/kgopotsomaifo",
    bio: null,
  };
  const tree = renderer.create(<UserInfo user={user} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test for user
test("User data is is rendered correctly", () => {
  const user = {
    username: "kgopotsomaifo",
    profile_picture: "https://avatars.githubusercontent.com/u/110554055?v=4",
    profile_url: "https://github.com/kgopotsomaifo",
    bio: null,
  };
  render(<UserInfo user={user} />);
  expect(screen.getByText(/kgopotsomaifo/i)).toBeInTheDocument();
});
