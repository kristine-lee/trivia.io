import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import Question from './Question';
import Result from './Result';

const StyledQuiz = styled.div`
  background-color: #DAF7A6;
  font-family: "Lucida Console", Monaco, monospace;
  height: 100vh;
`
const StyledText = styled.span`
  position: absolute;
  margin: 49vh;
`

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  // const [question, setQuestion] = useState();
  //recommended that we don't keep the question on state, but call it when it needs to be called with a get method...?
  //guess we could write a filter to do conditional rendering.
  const [questionIdx, setQuestionIdx] = useState(0);
  const [gotRight, setRight] = useState(1);
  const [gotWrong, setWrong] = useState(1);

  const maxQuestions = 10;

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch('/api/data');
        const questions = await response.json();
        // console.log("this is the response", questions)
        randomize(questions);
      }
    fetchData();
   } catch (error) {
      console.log("there was an error fetching the data!", error)
    }
  }, []); // [] effect doesn't need props or state


const randomize = (questions) => {
    let counter = 0;
    let shuffleArr = [];
    let indices = [];
    while (counter <= maxQuestions) {
      let index = Math.floor(Math.random() * Math.floor(questions.length-1))
      if(!indices.includes(index)){
        shuffleArr.push(questions[index])
        counter++
      }
  }
  setAllQuestions(shuffleArr)
  console.log("all the questions", allQuestions)
}

  const submitAnswer = async (answer) => {
    console.log("answer stuff", answer)
    setQuestionIdx(questionIdx+1);
    if (answer){
      setRight(gotRight+1)
      console.log("gotRight", gotRight)
    } else {
      setWrong(gotWrong+1)
      console.log("gotwrong", gotWrong)
    }
}


  const showQuestion = (question) => {
    if (questionIdx < maxQuestions && allQuestions.length > 0) {
      return (<Question question={question} submitAnswer={submitAnswer} />)
    }
  }


  return (
    <>
    <StyledQuiz>
     <StyledText>
       <h2>Trivia Quiz!</h2>
       </StyledText>
     { (questionIdx === maxQuestions ? <Result gotRight={gotRight} gotWrong={gotWrong} /> : showQuestion(allQuestions[questionIdx]))}
    </StyledQuiz>
    </>
  )
}

export default Quiz;
