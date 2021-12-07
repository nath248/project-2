import { Link } from "react-router-dom";

function Results(props) {
  const percent = (props.score / props.total) * 100;
  const reset = () => {
    props.setScore(0);
    props.setTotal(0);
  }

  return (
    <div>
      <h1>Results</h1>
      <p>{percent}%</p>
      <p>You got {props.score}/{props.total} questions correct</p>
      <p>Want to add questions to this quiz? Click ADD below.</p>
      <Link to="/new" onClick={reset}>ADD</Link>
    </div>
  )
}

export default Results;
