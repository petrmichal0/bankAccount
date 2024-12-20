import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import App from "../../App";

const mockStore = configureStore([]);

describe("App component", () => {
  test("renders the header", () => {
    const store = mockStore({
      customer: { fullName: "" },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const headerElement = screen.getByRole("heading", {
      name: "🏦 The React-Redux Bank ⚛️",
    });
    expect(headerElement).toBeInTheDocument();
  });

  test("renders CreateCustomer component when no customer exists", () => {
    const store = mockStore({
      customer: { fullName: "" },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const createButton = screen.getByRole("button", {
      name: "Create new customer",
    });
    expect(createButton).toBeInTheDocument();
  });

  test("renders Customer, AccountOperations, and BalanceDisplay when customer exists", () => {
    const store = mockStore({
      customer: { fullName: "John Doe" },
      account: { balance: 100, loan: 0, loanPurpose: "", isLoading: false },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const welcomeMessage = screen.getByText(/👋 Welcome, John Doe/i);
    const accountOperations = screen.getByText(/Your account operations/i);
    const balanceDisplay = screen.getByText(/\$100/i);

    expect(welcomeMessage).toBeInTheDocument();
    expect(accountOperations).toBeInTheDocument();
    expect(balanceDisplay).toBeInTheDocument();
  });

  test("does not render AccountOperations and BalanceDisplay if customer does not exist", () => {
    const store = mockStore({
      customer: { fullName: "" },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const accountOperations = screen.queryByText(/Your account operations/i);
    const balanceDisplay = screen.queryByText(/\$/i);

    expect(accountOperations).not.toBeInTheDocument();
    expect(balanceDisplay).not.toBeInTheDocument();
  });
});
