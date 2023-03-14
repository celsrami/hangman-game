import '../../styles/components/Letters.scss'

function ErrorLetters(props) {
  const renderErrorLetters = () => {
    return props.userLetters
      .filter((eachLetter) => !props.word.includes(eachLetter))
      .map((eachLetter, index) => {
        return (
          <li key={index} className="letter">
            {eachLetter}
          </li>
        );
      });
  };
  return <div className="error">
    <h2 className="title">Letras falladas:</h2>
    <ul className="letters">{renderErrorLetters()}</ul>
  </div>
}

export default ErrorLetters;