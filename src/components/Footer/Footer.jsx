import { Container } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container className="bg-warning py-1 mt-3" disableGutters={true} maxWidth={false}>
      <p className="text-center text-dark m-0 fs-6">Elemental | 2023</p>    
    </Container>
  );
};
export default Footer;
