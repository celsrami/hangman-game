const Options = ({ handleNewWordLifting }) => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  const handleNewWord = (ev) => {
    handleNewWordLifting(ev.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className='title' htmlFor='word'>
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autofocus
        autocomplete='off'
        class='form__input'
        maxlength='15'
        type='text'
        id='word'
        name='word'
        onChange={handleNewWord}
      />
    </form>
  );
};

export default Options;
