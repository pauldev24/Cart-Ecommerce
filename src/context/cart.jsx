import { createContext, useReducer, useState } from 'react'
import { cartReducer, cartinitialState } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer() {
    //el dispatch es el encargado de enviar las acciones a reducer
    const [state, dispatch] = useReducer(cartReducer, cartinitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeProductCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({
        type: 'CLEAR_CART'
    })

    return {state,addToCart,removeProductCart,clearCart}
}

//El context esta lo mas limpio
export function CartProvider({ children }) {
    const{state,addToCart,removeProductCart,clearCart} = useCartReducer()

    return (
        <CartContext.Provider value={{ cart: state, addToCart, clearCart, removeProductCart }}>
            {children}
        </CartContext.Provider>
    )
}