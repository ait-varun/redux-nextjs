// import React from "react";
// import { fireEvent, screen } from "@testing-library/react";
// import { renderWithProviders } from "@/utils/test-utils";
// import PostsList from "../posts-list";

// test("renders and shows posts", async () => {
//   const mockPosts = [
//     {
//       userId: 1,
//       id: 1,
//       title: "Post 1",
//       body: "This is the body of Post 1",
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: "Post 2",
//       body: "This is the body of Post 2",
//     },
//   ];
//   renderWithProviders(<PostsList posts={mockPosts} />, {
//     preloadedState: {
//       posts: [],
//     },
//   });

//   expect(screen.getByText("Post 1", "Post 2"));
// });

import React from "react";
import { screen, render } from "@testing-library/react";
import PostsList from "../posts-list";

import { useAppDispatch } from "../../hooks/hooks.tsx";
import { afterEach, beforeEach, describe } from "node:test";

jest.mock("../../hooks/hooks.tsx");

export const mockPosts = [
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

describe("PostsList", () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useAppDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders posts list", () => {
    render(<PostsList posts={mockPosts} />);
    const postItems = screen.getAllByTestId("post-item");
    expect(postItems).toHaveLength(2);
  });

  it("renders posts list with correct data", () => {
    render(<PostsList posts={mockPosts} />);
    const postItems = screen.getAllByTestId("post-item");
    expect(postItems[0]).toHaveTextContent("Post 1");
    expect(postItems[1]).toHaveTextContent("Post 2");
  });
});
