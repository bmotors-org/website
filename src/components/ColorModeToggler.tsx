import React from "react";
import {IconButton} from "@mui/material";
import Brightness7 from "@mui/icons-material/Brightness7";
import Brightness4 from "@mui/icons-material/Brightness4";
import {propsT} from "./Navbar";

export function ColorModeToggler(props: propsT) {
  const {colorMode, setColorMode} = props

  return (
    <IconButton
      onClick={() => setColorMode(colorMode == "light" ? "dark" : "light")}
      color="inherit">
      {colorMode === 'dark' ? <Brightness7/> : <Brightness4/>}
    </IconButton>
  );
}