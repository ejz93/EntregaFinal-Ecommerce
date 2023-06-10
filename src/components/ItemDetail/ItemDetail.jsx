import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Fragment, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import UseItemCount from "../../hooks/useItemCount";

const ItemDetail = (props) => {
  const { addCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { count, handleSumar, handleRestar } = UseItemCount();
  const { id, brand, model, price, img, stock } = props;

  return (
    <Fragment>
      <button className="btn btn-warning border border-dark text-center m-3 p-2"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
      <div className="container-fluid text-center border border-warning m-2 p-2">
      <h5 className="text-center p-1 m-2 fs-5">{brand}</h5>
      <h5 className="text-center p-1 m-2 fs-5">{model}</h5>
      <img
          src={img}
          className="m-5 p-2"
          style={{ height: "300px" }}
        />
      <p className="text-center p-1 m-2 fs-5">${price}</p>
      <p className="text-center p-1 m-2 fs-5">Stock: {stock}</p>
      </div>
      <hr />
      <div className="container-fluid text-center">          
          <button
            className="btn btn-warning border border-dark text-center m-2 p-2"
            onClick={() => handleRestar()}
            disabled={count === 1}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="btn btn-warning border border-dark text-center m-2 p-2"
            onClick={() => handleSumar()}
          >
            +
          </button>
          <button
            className="btn btn-warning border border-dark text-center m-2 p-2"
            onClick={() => addCart({ id, brand, model, price, count })}
          >
            Add to Cart
          </button>
        </div>
    </Fragment>
  );
};
export default ItemDetail;
