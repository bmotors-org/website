import {Box, Stack, Typography} from "@mui/material";
import {ColorModeToggler} from "../components/ColorModeToggler";
import {propsT} from "../components/App/AppRoutes";

export function Settings(props: propsT) {
  const {colorMode, setColorMode} = props

  return (
    <Box>
      <Stack sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem"
        }}>
        <Typography variant="body1">
          Appearance
        </Typography>
        <ColorModeToggler
          colorMode={colorMode}
          setColorMode={setColorMode}/>
      </Stack>
    </Box>
  )
}