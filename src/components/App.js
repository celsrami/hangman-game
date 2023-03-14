/* eslint-disable no-lone-blocks */
import { useState, useEffect } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header/Header';
import Dummy from './Main/Dummy';
import SolutionLetters from './Main/SolutionLetters';
import ErrorLetters from './Main/ErrorLetters';

{
  /* 
1. Acciones al arrancar la página:
  - Cargar una palabra del servidor usando fetch
  - Pintar rayitas según el número de letras de la palabra 
2. Acciones después de un evento de la usuaria:
  - Que se vea el valor de input y compararlo con la palabra
  - Condicional: si la letra está en la palabra pintarla en la solución y en la posición correcta, si no pintarla en las letras falladas y dibujar el ahorcado.
  - Errores 13. Si llegas a 13 errores mensaje de has perdido, si completas la palabra mensaje de has ganado (comparar el array de la palabra con el array de la solución, si la longitud es la misma has ganado)
*/
}

function App() {
  const [lastLetter, setlastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);

  useEffect(() => {
    callToApi()
      .then(response => {
        setWord(response.word)
      })
  }, [])

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    //const regExp = /[A - ZÁ - üñÑ\s]/i;
    const regExp = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]*$/;
    const pattern = regExp.test(inputValue);
    if (pattern) {
      setlastLetter(inputValue);
    } else {
      alert('Esa letra no es válida');
    }
    const letters = [...userLetters];
    letters.push(inputValue);
    setUserLetters(letters);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }


  const countErrors = () => {
    return userLetters
      .filter((eachLetter) => !word.includes(eachLetter))
      .length
  };



  return (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <form className="form" onSubmit={handleSubmit}>
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onInput={handleInput}
            />
          </form>
        </section>
        <Dummy numberOfErrors={countErrors()} />
      </main>
    </div>
  );
}

export default App;
