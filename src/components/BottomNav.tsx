import React from "react";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import People from "@mui/icons-material/People";
import Mail from "@mui/icons-material/Mail";
import Apps from "@mui/icons-material/Apps";
import {Link, useLocation} from "react-router-dom";
import {routes} from "../data/routes";
import {Settings} from "@mui/icons-material";

const {home, about, contact, apps, settings} = routes

export function BottomNav() {
  const {pathname} = useLocation()

  const [value, setValue] = React.useState<string>(pathname);

  return (
    <Paper sx={{
      position: 'fixed', bottom: 0, left: 0, right: 0
    }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(e, value) => setValue(value)}>
        <BottomNavigationAction
          component={Link} to={about}
          label="About"
          value={about || home}
          icon={<People/>}
        />
        <BottomNavigationAction
          component={Link} to={contact}
          label="Contact"
          value={contact}
          icon={<Mail/>}
        />
        <BottomNavigationAction
          component={Link} to={apps}
          label="Apps"
          value={apps}
          icon={<Apps/>}
        />
        <BottomNavigationAction
          component={Link} to={settings}
          label="Settings"
          value={settings}
          icon={<Settings/>}/>
      </BottomNavigation>
    </Paper>
  )
}