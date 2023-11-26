import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/selecType.css'

const SelecType = ({setSelectValue}) => {

  const url = 'https://pokeapi.co/api/v2/type'
  const [types, getTypes] = useFetch(url)  
  const setElement = useRef()
  useEffect(()=>{
    getTypes()
  },[])

  const handleChange = () => {
      setSelectValue(setElement.current.value)
  }

  return (
    <select className='poke__select' ref={setElement} onChange={handleChange}>
        <option value="Allpokemons">All pokemons</option>
        {
          types?.results.map(type=>(
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
    </select>
  )
}

export default SelecType