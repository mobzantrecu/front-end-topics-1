import { cleanup, render, screen, within } from "@testing-library/react";
import Button from "../../src/components/Button/Button";

afterEach(cleanup);

test("should render with the default styles, with the text 'Button' ", () => {
  render(
    <Button onClick={() => null}>
      <span data-testid="span">Button</span>
    </Button>
  );

  const button = screen.getByRole("button");
  const text = within(button).getByTestId("span");

  expect(button).toHaveClass("button default");
  expect(text.textContent).toBe("Button");
});

it("should render with the outline styles", () => {
  render(
    <Button modifier="outline" onClick={() => null}>
      <span>Button</span>
    </Button>
  );

  const button = screen.getByRole("button");

  expect(button).toHaveClass("button outline");
});

it("should render with a custom class ", () => {
  render(
    <Button
      modifier="outline"
      layoutComponentClasses="customClass"
      onClick={() => null}
    >
      <span>Button</span>
    </Button>
  );

  const button = screen.getByRole("button");

  expect(button).toHaveClass("button outline customClass");
});
