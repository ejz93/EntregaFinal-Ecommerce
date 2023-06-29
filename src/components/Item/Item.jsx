import React from "react";
import { useNavigate } from "react-router-dom";
import "./Item.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import {Divider} from "@mui/material";

const Item = ({id, brand, model, img, price}) => {

  const navigate = useNavigate();

  return (
    <Card className="text-light" sx={{boxShadow: 3, borderRadius: 1, border: 1, borderColor: 'text.primary', backgroundColor: 'text.primary', maxWidth: 350}}>
            <CardMedia
                component="img"
                alt={model}
                height="250"
                width="100%"
                image={img}
            />
            <CardContent>
                <Typography className="text-light" gutterBottom variant="h5" component="div">
                    {brand}
                </Typography>
                <Typography className="text-light" variant="body2" color="text.secondary">
                    {model}
                </Typography>
                <Typography className="imgMediaCard__price text-light" variant="h4" color="text.secondary">
                    ${price}
                </Typography>
            </CardContent>
            <Divider/>
            <Button
                 className="border border-dark p-2 w-100"
                 onClick={() => navigate(`/item/${id}`)}
                 variant="warning"
               >
                 Buy Now
               </Button>
        </Card>
  );
};

export default Item;
