import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";

import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
