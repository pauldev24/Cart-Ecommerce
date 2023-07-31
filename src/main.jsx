import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterProvider } from './context/filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*Luego de crear el contexto envuelo el componente que lo consume*/}
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
)
