import { render, screen } from "@testing-library/react";
import Card from "./index";

const mockCountry = {
  id: 1,
  Real_Name: "Brianna Forbes",
  Player_Name: "Dreamlurk The Unstoppable",
  Asset: "Foghammer Lead",
};

test("renders learn react link", () => {
  render(<Card country={mockCountry} />);
  const linkElement = screen.getByText(/Briannaa Forbes/);
  expect(linkElement).toBeInTheDocument();
});
