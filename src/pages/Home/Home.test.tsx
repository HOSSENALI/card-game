import React from "react";
import { act, render, screen } from "@testing-library/react";
import Home from "./Home";
import { Provider } from "react-redux";
import Store from "../../redux/store/store";

let store = Store();

describe("Home component", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText("Controls")).toBeInTheDocument();
  });

  it("Ascending Sort function works properly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const handleAscendingSort = screen.getByText("SORT ASC");

    act(() => {
      handleAscendingSort.click();
    });
    expect(store.getState().CardReducer.cards).toEqual(
      store
        .getState()
        .CardReducer.cards.sort((a, b) =>
          a.Real_Name.localeCompare(b.Real_Name)
        )
    );
  });

  it("Descending Sort function works properly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const handleDescendingSort = screen.getByText("SORT DESC");
    act(() => {
      handleDescendingSort.click();
    });
    expect(store.getState().CardReducer.cards).toEqual(
      store
        .getState()
        .CardReducer.cards.sort((a, b) =>
          b.Real_Name.localeCompare(a.Real_Name)
        )
    );
  });
});
