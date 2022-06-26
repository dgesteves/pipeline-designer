import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/globalStyles";
import theme from "./assets/styles/theme";
import PipelinePage from "./pages/PipelinePage";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PipelinePage />
    </ThemeProvider>
  );
}
