import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelecType from '../components/PokedexPage/SelecType'
import useFetch from '../hooks/useFetch'
import '../components/PokedexPage/styles/pokedexPage.css'
import '../components/PokedexPage/styles/pokeCard.css'
import Pagination from '../components/PokedexPage/Pagination'

const PokedexPage = () => {

  const trainerName = useSelector(store=>store.trainerName)

  
  
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('Allpokemons')
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPage, setCardPage] = useState(20)
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=1440&offset=0'
  const [pokemons, getPokemons,getTypePokemons] = useFetch(url)

  useEffect(()=>{
    if(selectValue === "Allpokemons"){
      getPokemons()   
    }else{
        getTypePokemons(selectValue)
      }
  },[selectValue])

  const inputSearch = useRef()

  const handleSubmit = e =>{

    e.preventDefault()
    setInputValue(inputSearch.current.value.toLowerCase().trim())
    inputSearch.current.value = ''
  }

  const cbFilter = (poke) => {
    const nameFiltered = poke.name.includes(inputValue)
    return nameFiltered
  }

  let numberCards = pokemons?.results.filter(cbFilter).map(poke=>poke).length

  const lastIndex = currentPage*cardsPage
  const firstIndex = lastIndex - cardsPage 
  
  return (
    <div>
      
        <h2 className='poke__titulo'>POKEDEX</h2>
        <p className='poke__texto'><span className='poke__welcome'> Welcome {trainerName}</span> <span className='poke__pa'>, here you find your favorite pokemon. let's go! </span></p>
        <span className='poke__buscador'>
      <form className='poke__formulario' onSubmit={handleSubmit} action="">
        <input className='form__input' placeholder='  Busca un pokemon' ref = {inputSearch} type="text" />
        <button className='form__boton'>Search</button>
      </form>
     <SelecType
        setSelectValue={setSelectValue}
     /> 
        </span>
      <div className='container__pokemons'>
        {pokemons?.results.filter(cbFilter).map(poke => (
          
          <PokeCard
          key= {poke.url}
          url={poke.url}
          />
          
        )).slice(firstIndex,lastIndex)
  
        }
       
      </div>
      <Pagination
      numberCards={numberCards}
      cardsPage={cardsPage}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      />
    </div>

  )
}

export default PokedexPage