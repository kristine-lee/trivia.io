//displays questions;
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledQuestion = styled.div`
  background-color: white;
  width: 50vw;
  margin-left: 25%;
`

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
        alert("Sorry, you need to pick an answer!")
      )
    }

    if (userAnswer === correctAnswer){
      submitAnswer(true)
    } else {
      submitAnswer(false)
      alert(`The correct answer is ${correctAnswer}`)
    }

    setUserAnswer("")
  }

  return (
    <StyledQuestion>
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
    </StyledQuestion>
  )
}

export default Question


Question.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
