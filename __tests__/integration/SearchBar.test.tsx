import { cleanup, render, screen, within } from "@testing-library/react";
import { SearchBar } from "../../src/layoutComponents/SearchBar";

test("Should render the correct texts", () => {
  render(<SearchBar></SearchBar>);

  const location = screen.getByPlaceholderText("City, state or zip");
  const job = screen.getByPlaceholderText("Job tittle or keyword");

  const button = screen.getByRole("button");
  const buttonText = within(button).getByText("Find jobs");

  expect(job).toBeInTheDocument();
  expect(location).toBeInTheDocument();
  expect(buttonText).toBeInTheDocument();
});
