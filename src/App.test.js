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

// logic unit tests
it("should show the correct questions for chosen algorithm", async () => {
  let { user } = prep(<OptionsPage />)
  let requiredRadioOption = screen.getByLabelText("radio-option-0")

  expect(requiredRadioOption).toBeInvalid()

  await user.click(requiredRadioOption)

  expect(requiredRadioOption).toBeValid()
})

// another unit test to check the validity of the user inputs
// another unit test if the user input is being passed into visualizations

