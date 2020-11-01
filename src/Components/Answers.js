//displays answers of a given question.
//and some kind of an action when a correct one is selected.
import React from 'react';


const Answers = (props) => {
//  const [userAnswer, setUserAnswer] = useState("")

  return (
    <li className="display-answers">
      <input type="radio" className="answer-radio-options" name="radioGroup" id={props.answerType} value={props.answerType} checked={props.answerType === props.answer} onChange={props.onAnswerSelected} />
      <label className="answerLabel" htmlFor={props.answertype}>
        {props.answerContent}
      </label>
    </li>
  )

}

export default Answers
