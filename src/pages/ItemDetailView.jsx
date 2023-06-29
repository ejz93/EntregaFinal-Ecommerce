import React, {useContext, useEffect} from 'react'
import Container from "@mui/material/Container";
import {useParams} from "react-router-dom";
import {ProductContext} from "../context/ProductProvider";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import Loader from "../components/Loader/Loader";

const ItemDetailView = () => {

    const {product, getProductById} = useContext(ProductContext);
    const {id} = useParams();

    useEffect( () => {
        getProductById(id);
    }, []);

    if (product) {
        return (
            <Container disableGutters maxWidth="md">
                <ItemDetail product={product} />
            </Container>
        )
    } else {
        return (
            <Loader showLoader={true} />
        )
    }

}
export default ItemDetailView;