import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("App", () => {
  const initialState = {
    empDetailsReducers: {
      employees: [],
    },
  };
  const mockStore = configureStore();
  let store;

  it("Render employee table", () => {
    store = mockStore(initialState);
    const screen = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const employeeTableEle = screen.getByLabelText("employee-table-container");
    expect(employeeTableEle).toBeInTheDocument();
  });
});
