import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Container, useMediaQuery} from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {Navbar} from "./components/Navbar";
import {BottomNav} from "./components/BottomNav";
import {AppRoutes} from "./components/App/AppRoutes";

export function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [colorMode, setColorMode] = React.useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {mode: colorMode},
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
          }
        }
      }),
    [colorMode],
  );

  const screenTablet = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      <Container sx={{
        marginTop: "1rem",
      }}>
        {screenTablet ?
          <Navbar
            colorMode={colorMode}
            setColorMode={setColorMode}/> : null}

        <AppRoutes
          colorMode={colorMode}
          setColorMode={setColorMode}/>

        {!screenTablet ? <BottomNav/> : null}
      </Container>
    </ThemeProvider>
  );
}