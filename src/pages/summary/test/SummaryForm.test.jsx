import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
//user-event better than fireEvent

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

  userEvent.click(checkBox);
  expect(btn).toBeEnabled();

  userEvent.click(checkBox);
  expect(btn).toBeDisabled();
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);

  //popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.queryByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);
  expect(nullPopover).not.toBeInTheDocument();
  const popover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();

  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
