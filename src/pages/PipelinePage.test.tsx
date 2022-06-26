import { render, screen, waitFor } from "@testing-library/react";
import PipelinePage from "./PipelinePage";
import theme from "../assets/styles/theme";
import GlobalStyles from "../assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";

describe("PipelinePage", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PipelinePage />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("renders expected children components", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PipelinePage />
      </ThemeProvider>
    );
    const headingComponent = screen.getByRole("heading");
    const descriptionComponent = screen.getByRole("contentinfo");
    const designerComponent = screen.getByTestId("designer-test");

    expect(headingComponent).toBeInTheDocument();
    expect(headingComponent.textContent).toBe("pipeline designer");
    expect(descriptionComponent).toBeInTheDocument();
    expect(designerComponent).toBeInTheDocument();

    await waitFor(() => {
      screen.getByTestId("pipeline-section-test");
    });

    expect(screen.getByTestId("pipeline-section-test")).toBeInTheDocument();
  });

  it("shoul match previous snapshot", async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PipelinePage />
      </ThemeProvider>
    );

    await waitFor(() => {
      screen.getByTestId("pipeline-section-test");
    });

    expect(container).toMatchSnapshot();
  });
});
