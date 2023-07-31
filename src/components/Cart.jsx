import './Cart.css'
import { useContext, useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}
export function Cart() {
    const carChecboxId = useId()
    const { cart, clearCart, addToCart } = useCart()
    return (
        <>
            <label className='cart-button' htmlFor={carChecboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={carChecboxId} hidden />
            <aside className='cart'>
                <ul>
                    {cart.map(product => (<CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}