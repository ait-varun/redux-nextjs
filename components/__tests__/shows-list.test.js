import { render, screen } from "@testing-library/react";
import ShowsList from "../shows-list.tsx";
import { useGetShowsQuery } from "../../features/shows/shows-slice.tsx";

jest.mock("../../features/shows/shows-slice.tsx");

const mockData = [
  {
    id: 1,
    name: "Show 1",
    image: { original: "https://example.com/show1.jpg" },
    rating: { average: 8.5 },
    network: { country: { name: "USA" } },
    runtime: 60,
  },
  {
    id: 2,
    name: "Show 2",
    image: { original: "https://example.com/show2.jpg" },
    rating: { average: 7.2 },
    network: { country: { name: "Canada" } },
    runtime: 45,
  },
];

describe("ShowsList", () => {
  beforeEach(() => {
    useGetShowsQuery.mockReturnValue({
      data: mockData,
      isFetching: false,
    });
  });

  it("renders a list of shows", () => {
    render(<ShowsList />);
    const showItems = screen.getAllByRole("listitem");
    expect(showItems).toHaveLength(mockData.length);
  });

  it("displays show details correctly", () => {
    render(<ShowsList />);
    const showItems = screen.getAllByRole("listitem");
    showItems.forEach((item, index) => {
      const show = mockData[index];
      expect(item).toHaveTextContent(show.name);
      expect(item).toHaveTextContent(`Rating: ${show.rating.average}`);
      expect(item).toHaveTextContent(`Country: ${show.network.country.name}`);
      expect(item).toHaveTextContent(`Runtime: ${show.runtime} minutes`);
    });
  });
});
