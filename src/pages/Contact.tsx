import {Link, Stack, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Contact() {
  const theme = useTheme()

  const screenTablet = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Stack
      direction="column"
      alignItems="center" textAlign="center">
      <Typography
        variant={screenTablet? "h2": "h4"}
        gutterBottom
        sx={{
          marginTop: "1.5rem"
        }}>
        For any query
      </Typography>
      <Link
        underline="hover"
        variant={screenTablet? "h2": "h4"}
        sx={{
          cursor: "pointer"
        }}
        onClick={
          () => window.location.href = "mailto:littledarkrain@gmail.com"
        }>
        Shoot us a mail!
      </Link>
    </Stack>
  )
}