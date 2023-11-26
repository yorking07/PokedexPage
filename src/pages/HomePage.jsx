import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import '../components/HomePage/styles/homePage.css'

export const HomePage = () => {
  const inputName = useRef();

  const dispach = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/pokedex");
    dispach(setTrainerName(inputName.current.value.trim()));
  };
  return (
    <div className="home__container">
      <h1 className="poke__title">POKÉDEX</h1>
      <h2 className="poke__saludo">¡Hi trainer!</h2>
      <p className="poke__parrafo">To start, please give me your trainer name</p>

      <form className="poke__form" onSubmit={handleSubmit}>
        <input placeholder="  Your name..." className="poke__input" ref={inputName} type="text" />
        <button className="poke__button">Start</button>
      </form>
      
    </div>
  );
};

export default HomePage;
