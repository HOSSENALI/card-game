import React from "react";
import { render, screen } from "@testing-library/react";
import Details from ".";
import { Provider } from "react-redux";
import Store from "../../../redux/store/store";

let store = Store();

describe("Details component", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
});
