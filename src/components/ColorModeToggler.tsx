import React from "react";
import {IconButton} from "@mui/material";
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
    <IconButton
      size="small"
      onClick={() => setColorMode(colorMode == "light" ? "dark" : "light")}
      color="info">
      {colorMode === 'dark' ?
        <Brightness7
          sx={{
            width: () => screenTablet ? "3rem" : "2rem",
            height: () => screenTablet ? "3rem" : "2rem"
          }}/> :
        <Brightness4
          sx={{
            width: () => screenTablet ? "3rem" : "2rem",
            height: () => screenTablet ? "3rem" : "2rem"
          }}/>}
    </IconButton>
  );
}