import React from "react";
import Header from "./components/Header";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        {}
      </main>
    </ThemeProvider>
  );
}

export default App;