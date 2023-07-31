import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Productos({ products }) {
    const { addToCart, cart, removeProductCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id == product.id)
    }

    return (
        <main className='products'>
            <ul>
                {/*El "(" es para definir que devuelve algo visual sino si se utliza llaves se pone un return*/}
                {products.slice(0, 10).map(product => {
                    const IsProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor:IsProductInCart?'red':'#09f'}} onClick={() => IsProductInCart ? removeProductCart(product) :
                                    addToCart(product)
                                }>
                                    {
                                        IsProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}