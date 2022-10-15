import React, { createContext, useEffect, useState } from "react";
const CartContext = createContext();

const ContextProvider = (props) => {
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        updateCartLength();
    }, []);

    const updateCartLength = () => {
        let localCart = sessionStorage.getItem("cart");
        localCart = JSON.parse(localCart);
        localCart && setCartLength(localCart.length);
    };

    return (
        <>
            <CartContext.Provider value={{ cartLength, updateCartLength }}>{props.children}</CartContext.Provider>
        </>
    );
};

export { CartContext, ContextProvider };
