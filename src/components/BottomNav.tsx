import React, {CSSProperties} from "react";
import {Paper, Stack} from "@mui/material";
import People from "@mui/icons-material/People";
import Mail from "@mui/icons-material/Mail";
import Apps from "@mui/icons-material/Apps";
import {useTheme} from "@mui/material/styles";
import {Link, useLocation} from "react-router-dom";
import {routes} from "../data/routes";
import {Settings} from "@mui/icons-material";
const {home, about, contact, apps, settings} = routes

export function BottomNav() {
  const theme = useTheme()

  const {pathname} = useLocation()

  const [selected, setSelected] = React.useState<string>(pathname)

  const styles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.875rem 0",
    flexGrow: "1",
    textDecoration: "none",
  }

  return (
    <Paper sx={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
    }} elevation={2}>
      <Stack sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}>
        <Link
          to={about} style={{
          ...styles,
          color: selected == about || selected == home ?
            theme.palette.secondary.main :
            theme.palette.primary.main
        }}
          onClick={() => setSelected(about)}>
          <People/>
          <span>About</span>
        </Link>

        <Link
          to={contact} style={{
          ...styles,
          color: selected == contact ?
            theme.palette.secondary.main :
            theme.palette.primary.main
        }}
          onClick={() => setSelected(contact)}>
          <Mail/>
          <span>Contact</span>
        </Link>

        <Link
          to={apps} style={{
          ...styles,
          color: selected == apps ?
            theme.palette.secondary.main :
            theme.palette.primary.main
        }}
          onClick={() => setSelected(apps)}>
          <Apps/>
          <span>Apps</span>
        </Link>

        <Link
          to={settings} style={{
          ...styles,
          color: selected == settings ?
            theme.palette.secondary.main :
            theme.palette.primary.main
        }}
          onClick={() => setSelected(settings)}>
          <Settings/>
          <span>Settings</span>
        </Link>
      </Stack>
    </Paper>
  )
}