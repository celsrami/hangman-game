import '../../styles/components/Form.scss'

function Form({ lifting, lastLetter }) {

  const handleSubmit = (ev) => {
    ev.preventDefault()
  }

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    /*
    const regExp = /^[A-Za-zñÑáéíóúÁÉÍÓÚüÜ\s]*$/;
    const pattern = regExp.test(inputValue);
    if (pattern) {
      lifting(inputValue)
    } else {
      alert('Esa letra no es válida');
    }
    */
    lifting(inputValue)

  };

  return (
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
    </form>)
}

export default Form;