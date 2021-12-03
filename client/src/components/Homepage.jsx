import { Link } from "react-router-dom";

function Homepage() {

  return (
    <>
      <div className="img-div">
        <img src="https://i.ibb.co/QDrJQys/logo-bkg.png" alt="logo" className="logo" width="230" height="200" />
      </div>
      <div className="content-div">
        <h1>Quizzes</h1>
        <Link to="/cartoon">90's Cartoon Quiz</Link>
        <Link to="/sitcoms">90's Sitcoms Quiz</Link>
        <Link to="/music">90's Music Quiz</Link>
      </div>
    </>
  )
}

export default Homepage;
