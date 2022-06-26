import { render } from "@testing-library/react";
import Draggable from "./index";

describe("Draggable icon", () => {
  it("should render correctly", () => {
    const { container } = render(<Draggable />);
    expect(container).toBeInTheDocument();
  });

  it("should have the correct svg", () => {
    const { container } = render(<Draggable />);
    expect(container).toMatchSnapshot();
  });
});
