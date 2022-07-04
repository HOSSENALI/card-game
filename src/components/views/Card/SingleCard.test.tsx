import React from "react";
import { act, render, screen } from "@testing-library/react";
import SingleCard from ".";
import { Provider } from "react-redux";
import Store from "../../../redux/store/store";

let store = Store();

const card = {
  id: 1,
  Real_Name: "Brianna Forbes",
  Player_Name: "Dreamlurk The Unstoppable",
  Asset: "Foghammer Lead",
};

describe("Single Card component", () => {
  it("should render with correct props", () => {
    render(
      <Provider store={store}>
        <SingleCard card={card} />
      </Provider>
    );
    expect(screen.getByText(/Brianna Forbes/)).toBeInTheDocument();
    expect(screen.getByText(/Dreamlurk The Unstoppable/)).toBeInTheDocument();
  });

  it("onclick add item to cart", () => {
    render(
      <Provider store={store}>
        <SingleCard card={card} />
      </Provider>
    );
    const cardElement = screen.getByTestId("card");
    act(() => {
      cardElement.click();
    });
    expect(store.getState().CardReducer.cart).toEqual(card);
  });
});
