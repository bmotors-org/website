import React from "react";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import People from "@mui/icons-material/People";
import Apps from "@mui/icons-material/Apps";
import {Link, useLocation} from "react-router-dom";
import {routes} from "../data/routes";
import {LanguageRounded as Connect, Settings} from "@mui/icons-material";

const {home, connect, apps, settings} = routes

export function BottomNav() {
  const {pathname} = useLocation()

  const [value, setValue] = React.useState<string>(pathname);

  return (
    <Paper sx={{
      position: 'fixed', bottom: 0, left: 0, right: 0
    }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(e, value) => {
          setValue(value)
        }}>
        <BottomNavigationAction
          disableRipple
          component={Link} to={home}
          label="About"
          value={home}
          icon={<People/>}
        />
        <BottomNavigationAction
          disableRipple
          component={Link} to={connect}
          label="Connect"
          value={connect}
          icon={<Connect/>}
        />
        <BottomNavigationAction
          disableRipple
          component={Link} to={apps}
          label="Apps"
          value={apps}
          icon={<Apps/>}
        />
        <BottomNavigationAction
          disableRipple
          component={Link} to={settings}
          label="Settings"
          value={settings}
          icon={<Settings/>}/>
      </BottomNavigation>
    </Paper>
  )
}