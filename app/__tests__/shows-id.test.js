import { render, screen } from "@testing-library/react";
import Page from "../shows/[id]/page.tsx";
import { useGetShowQuery } from "../../features/shows/shows-slice.tsx";
import Image from "next/image";

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
  it("Adds correct src attribute", () => {
    const alt = "Test Show";
    const src = "https://example.com/image.jpg";
    render(<Image src={src} alt={alt} width={100} height={100} />);

    const img = screen.getByAltText(alt);
    expect(img.getAttribute("src")).toMatch(
      /^\/\_next\/image\?url=https%3A%2F%2Fexample\.com%2Fimage\.jpg&w=\d+&q=\d+$/
    );
  });
});
