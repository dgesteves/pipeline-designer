import { render } from "@testing-library/react";
import Add from "./index";

describe("Add icon", () => {
  it("should render correctly", () => {
    const { container } = render(<Add />);
    expect(container).toBeInTheDocument();
  });

  it("should have the correct svg", () => {
    const { container } = render(<Add />);
    expect(container).toMatchSnapshot();
  });
});
