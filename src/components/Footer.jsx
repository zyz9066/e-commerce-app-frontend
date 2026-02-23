import { Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        backgroundColor: 'grey.900',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h7" component="div" align="center">
          E-commerce App &copy; {currentYear}
      </Typography>
    </Box>
  );
};
export default Footer;