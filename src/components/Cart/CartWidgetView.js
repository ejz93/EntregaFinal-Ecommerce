import React, { useContext } from 'react';
import {Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';

const CartWidgetView = ({color}) => {

  const {cart} = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <IconButton
      size='large'
      aria-label='show shopping'
      color={color}
      sx={{pt: 1, pb: 0}}
    >
      <Badge badgeContent={cart.length} color='info'>
        <ShoppingCartIcon onClick={()=>navigate(`/cart`)} sx={{pb: 0}} />
      </Badge>
    </IconButton>
  );
};

export default CartWidgetView;