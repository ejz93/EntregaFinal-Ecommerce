import React, { Fragment, useContext } from "react";
import CheckoutForm from "../Form/CheckoutForm";
import { ProductContext } from "../../context/ProductProvider";
import { CartContext } from "../../context/CartProvider";
import "./CartView.css";

const CartView = () => {
  const { cart, getTotal, removeItem, clearCart } = useContext(CartContext);
  const { handleSubmit } = useContext(ProductContext);

  return (
    <>
      <div className="cart_container col-sm-12">
        <h1 className="text-center text-light m-3">Checkout</h1>
        <div className="container col-sm-12">
          {cart.map(item => 
            <Fragment key={item.id}>
              <h4 className="text-light">{item.model}</h4>
              <img src={item.img} alt={item.model} width="50" height="50" />
              <h6 className="text-light">
                Quantity: {item.count}{" "}
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-warning m-4"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </h6>
            </Fragment>
          )}
          <h2 className="mt-4 text-light">
            Total: ${getTotal()}
            <button
              onClick={() => clearCart()}
              className="btn btn-warning mx-5"
            >
              <i className="bi bi-trash"></i> Clear Cart
            </button>
          </h2>

          <div className="form_container">
            <CheckoutForm
              total={cart.length}
              items={cart}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
