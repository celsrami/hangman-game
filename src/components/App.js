/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import '../styles/App.scss';

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
  const [numberOfErrors, setnumberOfErrors] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);
  const [errorLetters, setErrorLetters] = useState([]);

  const handleClick = () => {
    setnumberOfErrors(numberOfErrors + 1);
    console.log(numberOfErrors);
  };

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
    countErrors();
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((eachLetter, index) => {
      if (userLetters.includes(eachLetter)) {
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  const countErrors = () => {
    const failedLetters = userLetters.filter(
      (eachLetter) => !word.includes(eachLetter)
    );
    setErrorLetters(failedLetters);
  };

  const renderErrorLetters = () => {
    // const failedLetters = userLetters
    //   .filter((eachLetter) => !word.includes(eachLetter))
    return errorLetters.map((eachLetter, index) => {
      return (
        <li key={index} className="letter">
          {eachLetter}
        </li>
      );
    });
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">{renderErrorLetters()}</ul>
          </div>
          <form className="form">
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
        <section className={`dummy error-${errorLetters.length}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
}

export default App;
