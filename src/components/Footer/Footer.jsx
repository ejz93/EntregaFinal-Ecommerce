import { Container, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // <div className="row bg-warning py-1">
    //   <p className="text-center text-dark m-0 fs-6">Elemental | 2023</p>
    // </div>

    <div className="container-fluid bottom-0 bg-warning text-center py-2">
      <div className="content">
          <Typography variant='body3'>
            Elemental | &copy; {currentYear} | Code by :{' '}
            <a
              href='https://www.linkedin.com/in/estanislaojuarez93/'
              target='_blank'
              rel='noreferrer'
            >
              E. Juarez
            </a>
          </Typography>
      </div>
    </div>
  );
};
export default Footer;
