import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import './styles/pokeCard.css'


const PokeCard = ({url}) => {
  
  const [infoPoke, getInfoPoke] = useFetch(url);

  useEffect(() => {
    getInfoPoke();
  }, []);
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/pokedex/${infoPoke.id}`)
  }
 
 
  return (
    <>
    <article className="poke__cards" onClick={handleNavigate}>
      <header>
        <img
          src={infoPoke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section>
        <h3 className="card__name">{infoPoke?.name}</h3>
        
          <ul className="card__ul">
            {infoPoke?.types.map(infoType => (
              <li key={infoType.type.url}>{infoType.type.name}</li>
            ))}
          </ul>
            <hr />
            <ul className="poke__card__ul">
                {
                  infoPoke?.stats.map(infostat => (
                    <li className="card__stats" key={infostat.stat.url}>
                      <span className="card__names">{infostat.stat.name}</span>
                      <span className="card__number">{infostat.base_stat}</span>
                    </li>
                  ))
                }
            </ul>
      </section>
      
    </article>
    
    </>
  );
};

export default PokeCard