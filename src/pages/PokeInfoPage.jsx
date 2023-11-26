import { useParams } from "react-router-dom"
import useFetch from '../hooks/useFetch'
import { useEffect } from "react"
import '../components/PokedexPage/styles/pokeInfoPage.css'

const PokeInfoPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon, getPokemons] = useFetch(url)

  useEffect(() => {
    getPokemons()
  }, [])
  const firsType=pokemon?.types[0].type.name 

  {
    pokemon?.types.map(infoType => (
      <li  key={infoType.type.url}>{infoType.type.name}</li>
    ))
  }

  console.log(pokemon);
  return (
    <div className="infoPoke__boxx">
      <div className="box-banner">
        <div className="box-red"></div>
        <div className="cuadrado">
          <div className="cuadradito"></div>
        </div>
        <div className="box-black"></div>
      </div>
      
      <article className='infoPoke__article' >
        <img className="infoPoke__img" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <div className={`colorcito ${firsType}-gradient`}></div>
        <div className="infoPoke__div__card">
          <h3 className="infoPoke__id ">#{pokemon?.id}</h3>
          <div className="infoPoke__namecanbios">
            <hr className="infoPoke__hr__name"></hr>
            <span className="infoPoke__name">{pokemon?.species.name}</span>
            <hr className="infoPoke__hr__name"></hr>
          </div>
          <ul className="infoPoke__characteristics">
            <li className="infoPoke__weight infoPoke-Text">Peso</li>
            <li className="infoPoke__height infoPoke-Text">Altura</li>
            <li className="infoPoke__weight__value">{pokemon?.weight}</li>
            <li className="infoPoke__height__value">{pokemon?.height}</li>
          </ul>
          <div className="infoPoke__powers">
            <h3 className="infoPoke-Text">Tipo</h3>
            <h3 className="infoPoke-Text">Habilidades</h3>

            <ul className='pokecard__types'>
              {
                pokemon?.types.map(infoType => (
                  <li className={`pokecard__typename pokecard__typename--bg ${infoType.type.name}-gradient`} key={infoType.type.url}>{infoType.type.name}</li>
                ))
              }
            </ul>
            <ul className='pokecard__types pokecard__skills'>
              {
                pokemon?.abilities.map(infoskill => (
                  <li className='pokecard__typename pokecard__typeskill--bg ' key={infoskill.ability.url}>{infoskill.ability.name}</li>
                ))
              }
            </ul>

          </div>
          <div className='infoPoke__stats'>
            <h1 className='infoPoke__stats--title'>Stats</h1>
            <div className='infoPoke__stats--box'>
              {
                pokemon?.stats.map(stat => (
                  <div className='infoPoke__stats--item' key={stat.stat.name}>
                    <div className='infoPoke__stats--num'>
                      <h3>{stat.stat.name}</h3>
                      <span>{stat.base_stat}/150</span>
                    </div>
                    <div className='infoPoke__stats--bar'><span className='infoPoke__stats--bar2' style={{ width: `${(stat.base_stat * 100) / 150}%` }}></span></div>
                  </div>
                ))
              }
            </div>
          </div>







        </div>
      </article>
      <div className='infoPoke__container2'>
        <h1 className='infoPoke__stats--title'>Movements</h1>
          <div className='infoPoke__movements--box' key={pokemon?.id}>
             {
              pokemon?.moves.map(move => (
                <span>{move.move.name}</span>
              ))
             }
          </div>
        </div>
    </div>
  )
}

export default PokeInfoPage