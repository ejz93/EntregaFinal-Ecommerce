import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductProvider";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { Box } from "@mui/material";
import Loader from "../../components/Loader/Loader";
import { LoaderContext } from "../../context/LoaderProvider";
import Footer from "../../components/Footer/Footer";

const Home = () => {

  const { products, getProducts, getProductsByCategoryId } = useContext(ProductContext);
  const { isLoading } = useContext(LoaderContext);
  const { categoryId } = useParams();

  useEffect(() => {
    categoryId ? getProductsByCategoryId(categoryId) : getProducts();
  }, [categoryId]);

  if (isLoading) {
    return (
      <Loader showLoader={isLoading} />
    )
  }

  if (products) {
    return (
      <>      
        <Box>
          <h1 className="text-center text-light text-uppercase m-3">
            {categoryId}
          </h1>
        </Box>
        <ItemListContainer products={products} categoryId={categoryId} />
        <Footer />
      </>
    );
  } else {
    return (
      <h4>
        Products not found
      </h4>
    )
  }
};

export default Home;
