import React, {createContext, useEffect, useState} from 'react'

export const CartContext = createContext('')

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    // const addCart = (item) => {
    //     if (checkIfItemExistInCart(item.id)) {
    //         const updatedCart = cart.map((cartItem) => {
    //             if (cartItem.id === item.id) {
    //                 return {
    //                     ...cartItem,
    //                     count: cartItem.count + 1
    //                 };
    //             }
    //             return cartItem;
    //         });
    //         setCart(updatedCart);
    //     } else {
    //         setCart([...cart, item]);
    //     }
    // };

    
    useEffect(() => {
        const storedCart = sessionStorage.getItem('cart');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                } else {
                    console.log('Invalid cart data sessionStorage.');
                }
            } catch (error) {
                console.log('Error parsing cart data from sessionStorage:', error);
            }
        }
    }, []);

    const saveCartInSessionStorage = (cart) => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    const addCart = (item) => {
        let localCart = [];
        if (checkIfItemExistInCart(item.id)) {
            localCart = updatedCart(item.id)
        } else {
            localCart = [...cart, item]
        }
        setCart(localCart);
        saveCartInSessionStorage(localCart);
    };

    const updatedCart = (id) => cart.map((cartItem) => {
        if (cartItem.id === id) {
            return {
                ...cartItem,
                count: cartItem.count + 1
            };
        }
        return cartItem;
    });
    
    const checkIfItemExistInCart = (id) => {
        return cart.some((item) => item.id === id);
    }

    const getTotal = () => {
        return cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
        saveCartInSessionStorage('cart', updatedCart);
    }

    const clearCart = () => {
        setCart([]);
        saveCartInSessionStorage('cart', []);
    }

    return (
        <CartContext.Provider value={{cart, addCart, getTotal, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )

}
export default CartProvider;