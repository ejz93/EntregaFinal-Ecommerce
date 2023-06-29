import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import useItemCount from "../../hooks/useItemCount";
import { CartContext } from "../../context/CartProvider";
import { Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";

const ItemDetail = ({product}) => {
  
  const { addCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { count, handleSumar, handleRestar } = useItemCount();
  const { id, brand, model, price, img, stock } = product;

  return (
    <>
      <Button
        className="text-dark bg-warning border border-dark m-3 p-2"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
      <Card sx={{boxShadow: 3, borderRadius: 1, border: 1, borderColor: 'text.primary', maxWidth: 500}}>
      <CardMedia
                component="img"
                alt={model}
                height="auto"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {brand}
                </Typography>
                <Typography gutterBottom variant="h5" color="text.secondary">
                    {model}
                </Typography>
                <Typography className="imgMediaCard__price" variant="h6" color="text.secondary">
                    ${price}
                </Typography>
                <Typography className="imgMediaCard__price" variant="body1" color="text.secondary">
                    Stock: {stock}
                </Typography>
            </CardContent>
            <Divider/>
          <Button
            className="text-dark bg-warning border border-dark text-center m-2 p-2"
            onClick={() => handleRestar()}
            disabled={count === 1}
          >
            -
          </Button>
          <span>{count}</span>
          <Button
            className="text-dark bg-warning border border-dark text-center m-2 p-2"
            onClick={() => handleSumar()}
          >
            +
          </Button>
          <Button
            className="text-dark bg-warning border border-dark text-center m-2 p-2"
            onClick={() => addCart({ id, brand, model, price, count })}
          >
            Add to Cart
          </Button>        
      </Card>
    </>
  );
};
export default ItemDetail;
