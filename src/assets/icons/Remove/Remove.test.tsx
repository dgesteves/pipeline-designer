import { render } from "@testing-library/react";
import Remove from "./index";

describe("Remove icon", () => {
  it("should render correctly", () => {
    const { container } = render(<Remove />);
    expect(container).toBeInTheDocument();
  });

  it("should have the correct svg", () => {
    const { container } = render(<Remove />);
    expect(container).toMatchSnapshot();
  });
});
