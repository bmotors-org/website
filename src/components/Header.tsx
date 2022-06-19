import {Box, Divider, Stack, Typography} from "@mui/material";
import LocalShipping from "@mui/icons-material/LocalShipping";
import React from "react";

export function Header() {
  return (
    <Box sx={{
      textAlign: "center"
    }}>
      <Typography variant="h1" component="h1" gutterBottom sx={{
        marginTop: "1rem"
      }}>
        Bangla Motors
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        fontSize={48}>
        <Typography variant="h4" component="h4" gutterBottom>
          Truck rental service at your finger tips
        </Typography>
        <LocalShipping fontSize="inherit" color="primary" />
      </Stack>
    </Box>
  )
}