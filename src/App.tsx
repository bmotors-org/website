import React from "react";
import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container, useMediaQuery} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Navbar} from "./components/Navbar";
import {AppRoutes} from "./components/App/Routes";

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {mode: colorMode},
      }),
    [colorMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <Container sx={{
        marginTop: "1rem"
      }}>
        <Navbar
          colorMode={colorMode}
          setColorMode={setColorMode}/>
        <AppRoutes/>
      </Container>
    </ThemeProvider>
  );
}