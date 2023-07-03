import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import useItemCount from "../../hooks/useItemCount";
import { CartContext } from "../../context/CartProvider";
import { Button, Card, CardContent, CardMedia, Container, Divider, Typography } from "@mui/material";

const ItemDetail = ({product}) => {
  
  const { addCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { count, handleSumar, handleRestar } = useItemCount();
  const { id, brand, model, price, img, stock } = product;

  return (
    <>
      <Button
        className="text-dark bg-warning border border-dark m-3"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
      <Card className="container" sx={{boxShadow: 3, borderRadius: 1, border: 1, backgroundColor: 'text.primary', borderColor: 'text.primary', maxWidth: 500}}>
      <CardMedia
                component="img"
                alt={model}
                height="auto"
                image={img}
            />
            <CardContent>
                <Typography className="text-light" gutterBottom variant="h4" component="div">
                    {brand}
                </Typography>
                <Typography className="text-light" gutterBottom variant="h5" color="text.secondary">
                    {model}
                </Typography>
                <Typography className="imgMediaCard__price text-light" variant="h6" color="text.secondary">
                    ${price}
                </Typography>
                <Typography className="imgMediaCard__price text-light" variant="body1" color="text.secondary">
                    Stock: {stock}
                </Typography>
            <Divider/>
            
          <Container className="text-center" maxWidth="sm">

          <Button
            className="text-dark bg-warning border border-dark text-center m-2"
            onClick={() => handleRestar()}
            disabled={count === 1}
          >
            -
          </Button>
          <Button
            className="text-dark bg-warning border border-dark text-center m-2"
            onClick={() => handleSumar()}
            >
            +
          </Button>
          <Button
            className="text-dark bg-warning border border-dark text-center m-2"
            onClick={() => addCart({ id, brand, model, price, count })}
            >
            Add to Cart
          </Button>        
          <h3 className="mt-2 py-2 text-light"><b>Total: {count}</b></h3>
          </Container>
            </CardContent>
      </Card>
    </>
  );
};
export default ItemDetail;
