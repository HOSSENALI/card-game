import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./redux/store/store";
let store = Store();

describe("App component", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("Card Game")).toBeInTheDocument();
  });
});
