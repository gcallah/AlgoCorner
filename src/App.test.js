import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import OptionsPage from "./pages/Options";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
// following 5 are simple component rendering sucessfully unit tests
it("renders without crashing", () => {
  act(() => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

test("renders header text", () => {
  render(<App />);
  const linkElement = screen.getByText(/AlgoCorner/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders algorithm selection input", () => {
  render(<App />);
  const linkElement = screen.getByText(/Select Algorithm/i);
  expect(linkElement).toBeInTheDocument();
});

test("should display the correct number of options", () => {
  render(<App />);
  expect(screen.getAllByRole("option").length).toBe(3);
});

test("can select an algorithm", () => {
  render(<App />);
  expect(screen.getByRole("option", { name: "Binary Search Tree" }).selected);
  // expect(screen.getByRole('option', { name: 'Hash Table' }).selected).toBeInTheDocument();
});
