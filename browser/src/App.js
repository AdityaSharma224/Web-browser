import React, { useEffect, useLayoutEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import LandingPage from "./components/landing-page/landing-page-component";

const styles = `
::-webkit-scrollbar {
  width: 0 !important;
}

* {
  max-width: 2400px;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`;

function App() {
  const { pathname } = useLocation();

  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={styles} />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
