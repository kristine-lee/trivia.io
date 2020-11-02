//displays questions;
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Question = ({question, submitAnswer}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const correctAnswer = question.correct;

  let copyAnswers = [question.correct, ...question.incorrect]
  const shuffleAnswers = (copyAnswers) => {
    let counter = 0;
    let shuffleArr = [];
    while (counter < copyAnswers.length){
      shuffleArr.push(copyAnswers[Math.floor(Math.random() * Math.floor(copyAnswers.length-1))])
      counter++;
    }
    copyAnswers = shuffleArr;

  }



  const handleChange = (event) => {
    const pickedAnswer = event.target.value;
    setUserAnswer(pickedAnswer);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!userAnswer){
      return (
        alert("You need to pick an answer!")
      )
    }

    if (userAnswer === correctAnswer){
      submitAnswer(true)
    } else {
      // alert("the correct answer was:", correctAnswer)
      submitAnswer(false)
      alert(`The correct answer is ${correctAnswer}`)
    }
    // userAnswer === correctAnswer ? submitAnswer(true) : submitAnswer(false)

    setUserAnswer("")
  }

  return (
    <div className="display-question">
    {question && question.question}
  <form onSubmit={handleSubmit}>
    {question && copyAnswers.map(response => {
      return(
        <div key={response} className={response}>
          <input type="radio" value={response} name="response-options" onChange={handleChange} />
        {response}
        </div>
     )})}
    <button type="submit">Next</button>
  </form>
    </div>
  )
}

export default Question


Question.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
