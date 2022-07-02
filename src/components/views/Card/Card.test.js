import { render, screen } from "@testing-library/react";
import SingleCard from "./index";

const mockCard = {
  id: 1,
  Real_Name: "Brianna Forbes",
  Player_Name: "Dreamlurk The Unstoppable",
  Asset: "Foghammer Lead",
};

test("renders learn react link", () => {
  render(<SingleCard card={mockCard} />);
  const linkElement = screen.getByText(/Briannaa Forbes/);
  expect(linkElement).toBeInTheDocument();
});
