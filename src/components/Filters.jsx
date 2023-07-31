import {useId} from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
    const {filters,setFilters} = useFilters()
    //El useId nos da un identificador que no cambia por lo que puede ser usado para identificar los orden de llamada, su mejor uso es para lo id de elementos, no lo uses para listar
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const handleChangeMinPrice = (event)=>{
        setFilters(prevState =>({
            ...prevState,
            minPrice:event.target.value
        }))
    }

    const handleChangeCategory = (event) =>{
        //De esta forma se cambia un estado que contiene un objeto
        setFilters(prevState =>({
            ...prevState,
            category:event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de</label>
                <input type="range" id="price" min='0' max='1000' 
                onChange={handleChangeMinPrice}/>
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}