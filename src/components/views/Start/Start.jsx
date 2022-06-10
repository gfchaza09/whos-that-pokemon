import { useState } from 'react';
import { NavLink } from 'react-router-dom';

//Styles 
import './Start.styles.css';

export const Start = () => {

    const [pokemon, setPokemon] = useState("");

    fetch("https://pokeapi.co/api/v2/pokemon/charmander")
        .then(res => res.json())
        .then(data => setPokemon(data.sprites.front_default))

  return (
    <main className="main__start">
        <h1>¿Who's that Pokemon?</h1>
        <img src={pokemon} alt="pokemon" />
        <div>
            <div className='buttons'>
                <NavLink className="nes-btn play__button" to="/game">Start <i className="snes-logo is-small"></i></NavLink>
                <button type="button" className="nes-btn is-primary">Language</button>
            </div>
        </div>
    </main>
  )
};