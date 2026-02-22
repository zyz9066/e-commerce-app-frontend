import { Outlet } from "react-router-dom";

import { Container } from "@mui/material";

import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default App;
