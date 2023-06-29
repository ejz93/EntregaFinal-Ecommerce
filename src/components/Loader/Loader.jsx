import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./Loader.css";

const Loader = ({showLoader}) => {

    return (
        <>
            <Container maxWidth="xs" >
                <Box component="div" className="loader_container" >
                    { showLoader && <InfinitySpin width="200" color="#fc3" /> }
                </Box>
            </Container>
        </>
    )
}
      /* <div className="spinner-border text-warning text-center" role="status">
        {showLoader && <span className="visually-hidden">Loading...</span>}
      </div> */
      
      
  

export default Loader;
