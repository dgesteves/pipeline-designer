import { render, screen } from "@testing-library/react";
import theme from "../../assets/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import Description from "./index";

describe("Description component", () => {
  it("should render without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Description />
      </ThemeProvider>
    );

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should have the correct text content", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Description />
      </ThemeProvider>
    );

    expect(screen.getByRole("contentinfo").textContent).toBe(
      "Lorem ipsum dolor sit amet, pipeline designer consectetur adipisicing elit. Amet consequuntur cum debitis dignissimos ducimus minima obcaecati praesentium, reiciendis pipeline designer saepe veritatis voluptas voluptatibus? Blanditiis ipsam iste magnam neque nulla totam!"
    );
  });

  it("should match previous snapshot", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Description />
      </ThemeProvider>
    );

    expect(screen.getByRole("contentinfo")).toMatchSnapshot();
  });
});
