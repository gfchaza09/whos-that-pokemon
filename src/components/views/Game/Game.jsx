import { useEffect, useState } from 'react';
import { Loading } from '../../Loading/Loading';

import { random } from '../../../api';

//Styles
import './Game.styles.css';
import { Header } from '../../Header/Header';

export const Game = () => {

    const [pokemon, setPokemon] = useState({});
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(localStorage.getItem("max-score") || 0);

    useEffect(() => {
      setPokemon(random());
      if (!localStorage.getItem("max-score")) {
        localStorage.setItem("max-score", 0);
      }
      if (localStorage.getItem("max-score") < maxScore) {
        localStorage.setItem("max-score", maxScore);
      }
    }, [score])

    const handleChange = event => {
      setInput(event.target.value);
    }

    const handleGuess = () => {
      if(input.trim().toLowerCase() === pokemon.name) {
        setScore(value => value + 1);
      }
      if(maxScore <= score) {
        setMaxScore(score+1);
      }
      setInput("");
    }

  return (
    <>
      <Header score={score} maxScore={maxScore} />
      <main>
          <div className='container__game'>
              <h1>Who's that pokemon?</h1>
              {
                !pokemon.image ? <Loading /> : (<img src={pokemon.image} alt="pokemon" />)
              }
              <div className="nes-field">
                  <label htmlFor="name_field">Your answer: </label>
                  <input type="text" id="name_field" className="nes-input" onChange={handleChange} value={input} autoComplete="off"/>
              </div>
              <div>
                  <button type="button" className="nes-btn is-primary" onClick={handleGuess}>Guess</button>
              </div>
          </div>
      </main>
    </>
  )
};