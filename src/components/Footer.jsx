import { Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%", textAlign: "center", padding: 2 }}>
        <Typography variant="h7" component="div" align="center">
            E-commerce App &copy; {currentYear}
        </Typography>
    </Box>
  );
};
export default Footer;