const Options = () => {
  return (
    <form>
      <label class='title' for='word'>
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
      />
    </form>
  );
};

export default Options;
