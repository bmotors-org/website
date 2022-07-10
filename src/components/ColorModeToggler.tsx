import React from "react";
import {IconButton, Stack, Typography} from "@mui/material";
import Brightness7 from "@mui/icons-material/Brightness7";
import Brightness4 from "@mui/icons-material/Brightness4";
import {propsT} from "./Navbar";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function ColorModeToggler(props: propsT) {
  const {colorMode, setColorMode} = props

  const theme = useTheme()

  const screenTablet = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Stack sx={{
      flexDirection: "row",
      alignItems: "center",
      cursor: "pointer",
    }} onClick={() => setColorMode(colorMode == "light" ? "dark" : "light")}>
      {/* Don't show text on bigger devices */}
      {!screenTablet ?
        <Typography>
          {colorMode}
        </Typography> : null}

      <IconButton
        size="small"
        color="info">
        {colorMode === 'dark' ?
          <Brightness7
            sx={{
              width: () => screenTablet ? "3rem" : "1.5rem",
              height: () => screenTablet ? "3rem" : "1.5rem"
            }}/> :
          <Brightness4
            sx={{
              width: () => screenTablet ? "3rem" : "1.5rem",
              height: () => screenTablet ? "3rem" : "1.5rem"
            }}/>}
      </IconButton>
    </Stack>
  );
}