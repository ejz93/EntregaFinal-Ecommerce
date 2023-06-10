import React from "react";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  
  const navigate = useNavigate();
  const { id, brand, model, img, price, stock } = props;

  return (
    <div className="container border border-dark m-5 p-1">
      <h5 className=" fs-2">{brand}</h5>
      <h5 className=" fs-2">{model}</h5>
      <img
          src={img}
          className="d-flex mx-5 p-2"
          style={{ height: "250px" }}
        />
      <p className="text-center p-1 m-2 fs-5">${price}</p>
      <p className="text-center p-1 m-2 fs-5">{stock}</p>
      <button
        className="btn btn-warning border border-dark"
        onClick={() => navigate(`/item/${id}`)}
      >
        BUY NOW
      </button>
    </div>
  );
};

export default Item;
