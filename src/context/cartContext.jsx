import { createContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => (CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {
        //agregar logica de producto repetido
        setCartList([
            ...cartList,
            newProduct
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }
//eliminar pot item, precio total, cantidad total
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}