import React, {createContext} from 'react'
import useFirebase from "../hooks/useFirebase";

export const ProductContext = createContext('')

const ProductProvider = ({children}) => {

    const {products, product, getProductById, getProductsByCategoryId, getProducts, handleSubmit} = useFirebase();

    return (
        <ProductContext.Provider value={{products, product, getProductById, getProductsByCategoryId, getProducts, handleSubmit}}>
            {children}
        </ProductContext.Provider>
    )

}
export default ProductProvider;