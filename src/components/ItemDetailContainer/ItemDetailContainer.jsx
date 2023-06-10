import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import { CartContext } from "../../context/CartProvider";
import { ProductContext } from "../../context/ProductProvider";

const ItemDetailContainer = () => {

  const {products} = useContext(ProductContext);
  const {addCart} = useContext(CartContext);
  const {id} = useParams();
  const [filteredItem, setFilteredItem] = useState([]);

  const redirectsToHome = useCallback(() => {
      window.location.href = "/";
  }, []);

  const filterProduct = useCallback(() => {
      const filteredItem = products.find((item) => item.id === id);
      setFilteredItem(filteredItem);
  }, [products, id]);

  const checkFilterProduct = useCallback( () => {
      if (products.length > 0 && id) {
          filterProduct();
      } else {
          redirectsToHome();
      }
  }, [id, products, filterProduct, redirectsToHome]);

  useEffect(() => {
      checkFilterProduct();
  }, [checkFilterProduct]);

  return (
    <ItemDetail {...filteredItem} addCart={addCart} />
  )
}
export default ItemDetailContainer