import {Link, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {FacebookRounded, Instagram} from "@mui/icons-material";

export function Contact() {
  const theme = useTheme()

  const screenTablet = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Stack
      direction="column"
      alignItems="center" textAlign="center">
      <Typography
        variant={screenTablet ? "h2" : "h4"}
        gutterBottom
        sx={{
          marginTop: "1.5rem"
        }}>
        Find us on
      </Typography>
      <Stack>
        <Link href="https://www.facebook.com/B-Motors-107782258650766">
          <FacebookRounded fontSize="large"/>
        </Link>
        <Link href="https://www.instagram.com/bmotors4u/">
          <Instagram fontSize="large"/>
        </Link>
      </Stack>
    </Stack>
  )
}