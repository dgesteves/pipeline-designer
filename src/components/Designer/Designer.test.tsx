import { fireEvent, render, screen } from "@testing-library/react";
import Designer from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import GlobalStyles from "../../assets/styles/globalStyles";

describe("Designer component", () => {
  it("should match previous snapshot", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Designer />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Designer />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render the correct number of options", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Designer />
      </ThemeProvider>
    );

    expect(screen.getAllByTestId("draggable-option").length).toBe(2);
    expect(screen.getAllByTestId("draggable-option").at(0)?.textContent).toBe(
      "retriever"
    );
    expect(screen.getAllByTestId("draggable-option").at(1)?.textContent).toBe(
      "reader"
    );
  });

  it("should call setData with correct data onDragStart", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Designer />
      </ThemeProvider>
    );

    const draggableOption = screen.getAllByTestId("draggable-option")[0];
    const mockData = { setData: jest.fn() };

    fireEvent.dragStart(draggableOption, {
      dataTransfer: mockData,
    });

    expect(mockData.setData).toHaveBeenCalledWith("name", "retriever");
  });
});
