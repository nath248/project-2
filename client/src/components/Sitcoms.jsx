import { useEffect, useState } from "react";

function Sitcoms(props) {

const [question, setQuestion] = useState({});

useEffect(() => {
  const foundQuestion = props.questions.find(question => {
    return question.fields.category === "sitcoms";
  })
  setQuestion(foundQuestion);
}, [props.questions])
  
  return (
    <div>
      {question && question.fields ?
      <>
        <h3 key={question.id}>{question.fields.question}</h3>
        <button>{question.fields.answer1}</button>
        <button>{question.fields.answer2}</button>
        <button>{question.fields.answer3}</button>
        <button>{question.fields.answer4}</button>
      </>
      :
      null
      }
    </div>
  )
}

export default Sitcoms;
