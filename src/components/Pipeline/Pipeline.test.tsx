import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Pipeline from "./index";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/styles/theme";
import GlobalStyles from "../../assets/styles/globalStyles";

describe("Pipeline component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render initial state", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    expect(container.textContent).toBe("Loading...");
  });

  it("should match previous snapshot", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    await waitFor(() => {
      screen.getByTestId("pipeline-section-test");
    });
    expect(screen.getByTestId("pipeline-section-test")).toMatchSnapshot();
  });

  it("should remove node correctly when clicked", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    await waitFor(() => {
      screen.getByTestId("pipeline-section-test");
    });

    expect(screen.getAllByTestId("node-test")).toHaveLength(3);

    fireEvent.click(screen.getAllByTestId("remove-node-test").at(0)!);

    expect(screen.getAllByTestId("node-test")).toHaveLength(2);

    fireEvent.click(screen.getAllByTestId("remove-node-test").at(0)!);

    expect(screen.getAllByTestId("node-test")).toHaveLength(1);
  });

  it("should have query as first node on pipeline and can not be removed", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    await waitFor(() => {
      screen.getByTestId("pipeline-section-test");
    });

    const queryNode = screen.getAllByTestId("node-test").at(0);

    expect(queryNode?.textContent).toBe("query");

    fireEvent.click(screen.getAllByTestId("remove-node-test").at(0)!);

    expect(screen.getAllByTestId("node-test")).toHaveLength(2);

    fireEvent.click(screen.getAllByTestId("remove-node-test").at(0)!);

    expect(screen.getAllByTestId("node-test")).toHaveLength(1);

    expect(queryNode).toBeInTheDocument();
  });

  it("should add node correctly when dropped", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    await waitFor(async () => {
      screen.getByTestId("pipeline-section-test");
    });

    expect(screen.getAllByTestId("node-test")).toHaveLength(3);

    const addIcon = screen.getAllByTestId("add-node-test").at(0);
    const mockData = { getData: jest.fn() };

    fireEvent.drop(addIcon!, {
      dataTransfer: mockData,
    });

    expect(screen.getAllByTestId("node-test")).toHaveLength(4);

    fireEvent.drop(addIcon!, {
      dataTransfer: mockData,
    });

    expect(screen.getAllByTestId("node-test")).toHaveLength(5);
  });

  it("should get data onDrop", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Pipeline />
      </ThemeProvider>
    );

    await waitFor(() => {
      screen.getByTestId("pipeline-section-test");
    });

    const addIcon = screen.getAllByTestId("add-node-test").at(0);
    const mockData = { getData: jest.fn() };

    fireEvent.drop(addIcon!, {
      dataTransfer: mockData,
    });

    expect(mockData.getData).toHaveBeenCalled();
  });
});
