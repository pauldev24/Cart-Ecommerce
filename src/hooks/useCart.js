import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
    const { cart, addToCart, removeProductCart, clearCart } = useContext(CartContext)

    if (cart == undefined) {
        throw new Error('useCart no puede acceder al contexto')
    }
    return { cart, addToCart, removeProductCart, clearCart }
}