//displays questions;
import React, { useState } from 'react'

const Question = ({question, submitAnswer}) => {
  const [userAnswer, setUserAnswer] = useState("");

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



  const handleChange = (e) => {
    setUserAnswer(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!userAnswer){
      return (
        alert("You need to pick an answer!")
      )
    }
    userAnswer === question.correct ? submitAnswer(true) : submitAnswer(false)

    setUserAnswer("")
  }

  return (
    <div className="display-question">
    {question && question.question}
  <form onSubmit={handleSubmit}>
    {question && copyAnswers.map(response => {
      return(
        <div key={response} className="response-options">
          <input type="radio" value={response} name="response-options" handleChange={handleChange} />
        {response}
        </div>
      )
    } )}
  <button type="submit">Next</button>
  </form>
    </div>
  )
}

export default Question
