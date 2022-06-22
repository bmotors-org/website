import React from "react";
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import {Link, useLocation} from "react-router-dom"
import People from "@mui/icons-material/People";
import Mail from "@mui/icons-material/Mail";
import Apps from "@mui/icons-material/Apps";
import {ColorModeToggler} from "./ColorModeToggler";
import {routes} from "../data/routes";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export type propsT = {
  colorMode: 'light' | 'dark',
  setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

const {home, about, contact, apps} = routes

export function Navbar(props: propsT) {
  const {colorMode, setColorMode} = props

  const {pathname} = useLocation()

  const theme = useTheme()

  const screenTablet = useMediaQuery(theme.breakpoints.up('sm'))

  const [selectedID, setSelectedID] = React.useState<string>(pathname)

  return (
    <Stack direction="row" alignItems="center" sx={{
      padding: "0.75rem"
    }}>
      <Stack direction="row" sx={{
        marginLeft: "auto",
        marginRight: () => screenTablet ? "0" : "auto"
      }}>
        <ButtonGroup variant="outlined" size={screenTablet ? "large" : "medium"}>
          <Button
            variant={selectedID == home || selectedID == about ?
              "contained" : "outlined"}
            component={Link} to={about} endIcon={<People/>}
            onClick={() => setSelectedID(about)}>
            About
          </Button>
          <Button
            variant={selectedID == contact ?
              "contained" : "outlined"}
            component={Link} to={contact} endIcon={<Mail/>}
            onClick={() => setSelectedID(contact)}>
            Contact
          </Button>
          <Button
            variant={selectedID == apps ?
              "contained" : "outlined"}
            component={Link} to={apps} endIcon={<Apps/>}
            onClick={() => setSelectedID(apps)}>
            Apps
          </Button>
        </ButtonGroup>
      </Stack>

      {screenTablet ?
        <Box sx={{
          marginLeft: 'auto'
        }}>
          <ColorModeToggler
            colorMode={colorMode}
            setColorMode={setColorMode}
          />
        </Box> : null}
    </Stack>
  );
}