//displays questions;
import React, { useState } from 'react'
import Answers from './Answers';

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
        alert("You need to input an answer!")
      )
    }
    userAnswer === question.correct_answer ? submitAnswer(true) : submitAnswer(false)

    setUserAnswer('')
  }

  return (
    <div className="display-question">
    {question.question}
  {/* <form onSubmit={handleSubmit}>
      {question.question}
      <Answers correct={question.correct} incorrect={question.incorrect} onChange={handleChange}/>
  </form> */}
    </div>
  )
}

export default Question
