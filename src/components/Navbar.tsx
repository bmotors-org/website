import React from "react";
import {Box, Button, ButtonGroup, Stack} from "@mui/material";
import {Link, useLocation} from "react-router-dom"
import People from "@mui/icons-material/People";
import Mail from "@mui/icons-material/Mail";
import Apps from "@mui/icons-material/Apps";
import {ColorModeToggler} from "./ColorModeToggler";
import {routes} from "../data/routes";

export type propsT = {
  colorMode: 'light' | 'dark',
  setColorMode: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

const {home, about, contact, apps} = routes

export function Navbar(props: propsT) {
  const {colorMode, setColorMode} = props

  const {pathname} = useLocation()

  const [selectedID, setSelectedID] = React.useState<string>(pathname)

  return (
    <Stack direction="row" alignItems="center" sx={{
      padding: "0.75rem"
    }}>
      <Stack direction="row" sx={{
        marginLeft: "auto"
      }}>
        <ButtonGroup variant="text" size="large">
          <Button
            component={Link} to={about} endIcon={<People/>}
            color={
              selectedID == home || selectedID == about ?
                "success" : "primary"}
            onClick={() => setSelectedID(about)}>
            About
          </Button>
          <Button
            component={Link} to={contact} endIcon={<Mail/>}
            color={selectedID == contact ? "success" : "primary"}
            onClick={() => setSelectedID(contact)}>
            Contact
          </Button>
          <Button
            component={Link} to={apps} endIcon={<Apps/>}
            color={selectedID == apps ? "success" : "primary"}
            onClick={() => setSelectedID(apps)}>
            Apps
          </Button>
        </ButtonGroup>
      </Stack>

      <Box sx={{
        marginLeft: 'auto'
      }}>
        <ColorModeToggler
          colorMode={colorMode}
          setColorMode={setColorMode}
        />
      </Box>
    </Stack>
  );
}