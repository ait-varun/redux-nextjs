import { render, screen } from "@testing-library/react";
import Page from "../shows/[id]/page";
import { useGetShowQuery } from "../../features/shows/shows-slice.tsx";

jest.mock("../../features/shows/shows-slice.tsx");

describe("Page", () => {
  const mockShow = {
    id: "1",
    name: "Test Show",
    image: { original: "https://example.com/image.jpg" },
    language: "English",
    rating: { average: 8.5 },
    genres: ["Drama", "Action"],
    premiered: "2022-01-01",
    summary: "<p>This is a test summary.</p>",
  };

  beforeEach(() => {
    useGetShowQuery.mockReturnValue({
      data: mockShow,
      isFetching: false,
    });
  });

  it("renders show details correctly", () => {
    render(<Page params={{ id: "1" }} />);

    expect(screen.getByText("Test Show")).toBeInTheDocument();
    expect(screen.findByDisplayValue("Language: English"));
    expect(screen.findByDisplayValue("Rating: 8.5"));
    expect(screen.findByDisplayValue("Genres: Drama, Action"));
    expect(screen.findByDisplayValue("Premiered: January 1, 2022"));
    expect(screen.getByText("This is a test summary.")).toBeInTheDocument();
  });

  // it("renders loading spinner when fetching data", () => {
  //   useGetShowQuery.mockReturnValue({
  //     data: undefined,
  //     isFetching: true,
  //   });

  //   render(<Page params={{ id: "1" }} />);

  //   expect(screen.getByRole("status")).toBeInTheDocument();
  // });

  // it("renders default values when data is missing", () => {
  //   useGetShowQuery.mockReturnValue({
  //     data: {},
  //     isFetching: false,
  //   });

  //   render(<Page params={{ id: "1" }} />);

  //   expect(screen.getByText("Language: N/A")).toBeInTheDocument();
  //   expect(screen.getByText("Rating: N/A")).toBeInTheDocument();
  //   expect(screen.getByText("Genres: N/A")).toBeInTheDocument();
  //   expect(screen.getByText("Premiered: N/A")).toBeInTheDocument();
  //   expect(screen.getByText("N/A")).toBeInTheDocument();
  // });
});
