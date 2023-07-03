import React from "react";
import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import "./ItemListContainer.css";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";

const ItemListContainer = ({ products, categoryId }) => {

  const navigate = useNavigate();

  return (
    <Container maxWidth='xl' sx={{mt: 4}}>
    <Box sx={{ flexGrow: 1 }}>
      {categoryId && 
        <Grid className="itemListContainer__category">
          <button className="btn btn-warning border border-dark mx-5 mb-5" onClick={() => navigate(`/`)}>
            Home
          </button>
        </Grid>
      }
      
        <Grid container spacing={3}>
          {products.map(({ id, category, brand, model, img, price, stock }) => (
            <Grid xs={12} sm={6} md={4} key={id}>
              <Item
                id={id}
                category={category}
                brand={brand}
                img={img}
                model={model}
                price={price}
                stock={stock}
              />
            </Grid>
          ))}
        </Grid>
    </Box>
    </Container>
  );
};

export default ItemListContainer;
