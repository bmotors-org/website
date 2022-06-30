import {Box, Divider, Stack, Typography} from "@mui/material";
import LocalShipping from "@mui/icons-material/LocalShipping";
import React from "react";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Header() {
  const theme = useTheme()

  const screenTablet = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Box sx={{
      textAlign: "center"
    }}>
      <Typography
        variant={
          screenTablet ? "h2" : "h3"
        }
        gutterBottom sx={{
        marginTop: "1rem"
      }}>
        Bangla Motors
      </Typography>
      <Stack
        direction={screenTablet ? "row" : "column"}
        justifyContent="center"
        alignItems="center"
        divider={
          <Divider
            orientation={screenTablet ? "vertical" : "horizontal"}
            flexItem/>
        }
        spacing={2}
        fontSize={48}>
        <Typography
          variant={
            screenTablet ? "h4" : "subtitle1"
          } gutterBottom>
          Truck rental service at your {!screenTablet? null: null}finger tips
        </Typography>
        <LocalShipping fontSize="inherit" color="primary"/>
      </Stack>
    </Box>
  )
}