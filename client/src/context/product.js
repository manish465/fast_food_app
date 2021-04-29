import { createContext, useState } from "react";

export const productContext = createContext();

const ProductContext = ({ children }) => {
    const [productList, setProductList] = useState([]);

    return (
        <productContext.Provider value={{ productList, setProductList }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;
