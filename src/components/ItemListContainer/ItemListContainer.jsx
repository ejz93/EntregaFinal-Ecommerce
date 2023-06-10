import React, { useCallback, useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import "./stylesItemListContainer.css";
import Item from "../Item/Item";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { ProductContext } from "../../context/ProductProvider";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  
  const { products, getProducts } = useContext(ProductContext);
  const { addCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const { categoryId } = useParams();
  const [filteredItem, setFilteredItem] = useState([]);

  const filterProducts = useCallback(() => {
    if (categoryId) {
      const filteredItems = products.filter(
        (item) => item.category === categoryId
      );
      setFilteredItem(filteredItems);
    } else {
      setFilteredItem(products);
    }
  }, [products, categoryId]);

  // useEffect(() => {
  //   getProducts();
  //   filterProducts();
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 1000);
  // }, [getProducts, filterProducts]);

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();
      filterProducts();
      setTimeout(() => {
        setLoader(false);
      }, 500);
    };
  
    fetchData();
  }, [getProducts, filterProducts]);
  

  return (
    <Fragment>
      {loader ? (
        <Loader showLoader={true} />
      ) : (
        <Fragment>
          <div>
            {categoryId && (
              <div>
                <button className="" onClick={() => navigate(`/`)}>
                  Todos los productos
                </button>
              </div>
            )}
            <div className="container" style={{alignItems:'center' ,justifyContent:'center',textAlign:'center'}}>
              {products.map(
                ({ id, category, brand, model, img, price }) => (
                  <div key={id}>
                    <Item
                      id={id}
                      category={category}
                      brand={brand}
                      img={img}
                      model={model}
                      price={price}
                      addCart={addCart}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ItemListContainer;
