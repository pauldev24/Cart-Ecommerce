import './App.css'
import { products as initialProducts } from './mocks/product.json'
import { Productos } from './components/Productos.jsx'
import { useState } from 'react'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config/config'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {

  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Productos products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  )
}

export default App
