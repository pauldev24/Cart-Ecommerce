import React from 'react'
import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer() {
  const {filters} = useFilters()
  return (
    <footer className='footer'>
        {
            JSON.stringify(filters,null,2)
        }
        {/*<h4>Proyecto de Ecommerce</h4>
        <span>@pauldev24</span>
  <h3>Shoping Cart</h3>*/}
    </footer>
  )
}
