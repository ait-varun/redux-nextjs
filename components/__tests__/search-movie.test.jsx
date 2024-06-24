import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchMovie from "../search-movie";
import { useSearchShowQuery } from "../../features/shows/shows-slice.tsx";
import { describe } from "node:test";

jest.mock("../../features/shows/shows-slice.tsx");

describe("SearchMovie", () => {
  const mockData = [
    {
      show: {
        id: 1,
        name: "Show 1",
        image: { medium: "https://example.com/show1.jpg" },
      },
    },
    {
      show: {
        id: 2,
        name: "Show 2",
        image: { medium: "https://example.com/show2.jpg" },
      },
    },
  ];

  beforeEach(() => {
    useSearchShowQuery.mockReturnValue({
      data: [],
      isFetching: false,
    });
  });

  test("renders input field", () => {
    render(<SearchMovie />);
    const inputField = screen.getByPlaceholderText("Search shows...");
    expect(inputField).toBeInTheDocument();
  });


  test("renders show list when data is available", async () => {
    useSearchShowQuery.mockReturnValue({
      data: mockData,
      isFetching: false,
    });
    render(<SearchMovie />);
    const inputField = screen.getByPlaceholderText("Search shows...");
    fireEvent.change(inputField, { target: { value: "test" } });
    await waitFor(() => {
      const showItems = screen.getAllByRole("link");
      expect(showItems).toHaveLength(mockData.length);
    });
  });

  test("renders no shows found message when data is empty", async () => {
    render(<SearchMovie />);
    const inputField = screen.getByPlaceholderText("Search shows...");
    fireEvent.change(inputField, { target: { value: "test" } });
    await waitFor(() => {
      const noShowsMessage = screen.getByText("No Shows found");
      expect(noShowsMessage).toBeInTheDocument();
    });
  });
});
