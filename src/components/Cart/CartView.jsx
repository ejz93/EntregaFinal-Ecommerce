import React, { Fragment, useContext } from "react";
import CheckoutForm from "../Form/CheckoutForm";
import { ProductContext } from "../../context/ProductProvider";
import { CartContext } from "../../context/CartProvider";

const CartView = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext);
  const { handleSubmit } = useContext(ProductContext);

  return (
    <Fragment>
      <div className="container-fluid col col-sm-12 border border-dark">
      <h1 className="text-center m-3">Checkout</h1>
      <div className="container-fluid col col-sm-12">
        
          {cart.map((products) => (
            <Fragment key={products.model}>
              <h4 className="m-3">{products.model}</h4>
              <h6 className="m-3">Quantity: {products.count}</h6>
              <button
                onClick={() => removeItem(products.id)}
                className="btn btn-danger mx-2"
              >
                <i className="bi bi-trash"></i>
              </button>
              
            </Fragment>
          ))}
          <hr />
          <h2>Total: ${getTotal()}</h2>
          <button
                onClick={() => clearCart()}
                className="btn btn-danger m-5"
              >
                <i className="bi bi-trash"></i> Clear Cart
              </button>
       
      </div>
        <div className="container-fluid m-3">
          <CheckoutForm
            total={cart.length}
            items={cart}
            handleSubmit={handleSubmit}
          />
        </div>
        </div>
    </Fragment>
  );
};

export default CartView;
