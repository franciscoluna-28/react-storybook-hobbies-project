import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("FilterSection", () => {
  beforeEach(() => {
    render(<App />);
  });

  // Start the User Event setup
  const user = userEvent.setup();

  test("Default value 'All' must be selected by default", () => {
    expect(
      (screen.getByRole("option", { name: "All" }) as HTMLOptionElement)
        .selected
    ).toBe(true);
  });

  test("Should allow the user to change the value", async () => {
    await user.selectOptions(screen.getByRole("combobox"), "Social");
    expect(
      (screen.getByRole("option", { name: "Social" }) as HTMLOptionElement)
        .selected
    ).toBe(true);
  });
});
