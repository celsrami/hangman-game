import '../../styles/components/Letters.scss'

function SolutionLetters(props) {
  const renderSolutionLetters = () => {
    const wordLetters = props.word.split('');
    return wordLetters.map((eachLetter, index) => {
      if (props.userLetters.includes(eachLetter)) {
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
  return <div className="solution">
    <h2 className="title">Solución:</h2>
    <ul className="letters">{renderSolutionLetters()}</ul>
  </div>
}

export default SolutionLetters;