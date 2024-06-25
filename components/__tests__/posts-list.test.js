import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/utils/test-utils";
import PostsList from "../posts-list";

test("renders and shows posts", async () => {
  const mockPosts = [
    {
      userId: 1,
      id: 1,
      title: "Post 1",
      body: "This is the body of Post 1",
    },
    {
      userId: 1,
      id: 2,
      title: "Post 2",
      body: "This is the body of Post 2",
    },
  ];
  renderWithProviders(<PostsList posts={mockPosts} />, {
    preloadedState: {
      posts: [],
    },
  });

  expect(screen.getByText("Post 1", "Post 2"));
});
