import { render, fireEvent, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("Checkbox is unchecked by default", () => {
  render(<SummaryForm />);

  const checkBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  const btn = screen.getByRole("button", { name: /confirm order/i });

  expect(checkBox).not.toBeChecked();
  expect(btn).toBeDisabled();
});

test("Checking checkbox enables button", () => {
  render(<SummaryForm />);

  const checkBox = screen.getByRole("checkbox", {
    name: /i agree to terms and conditions/i,
  });
  const btn = screen.getByRole("button", { name: /confirm order/i });

  fireEvent.click(checkBox);
  expect(btn).toBeEnabled();

  fireEvent.click(checkBox);
  expect(btn).toBeDisabled();
});
