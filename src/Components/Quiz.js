import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Question from './Question';
// import { randomize, calculateScore } from './util';

const StyledQuiz = styled.div`
  background-color: #DAF7A6;
  font-family: "Lucida Console", Monaco, monospace;
  height: 100vh;
`
const StyledText = styled.span`
  position: absolute;
  margin: 49vh;
`
const StyledButton = styled.button`
  background-color: white;
`

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [gotRight, setRight] = useState(0);
  const [gotWrong, setWrong] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch('/api/data');
        const questions = await response.json();
        // console.log("this is the response", questions)
        await randomize(questions);
        setQuestion(questions[0].question);
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
    while (counter <= questions.length) {
      let index = Math.floor(Math.random() * Math.floor(questions.length-1))
      if(!indices.includes(index)){
        shuffleArr.push(questions[index])
        counter++
      }
    }
    // for (let i = copyArray.length - 1; i < copyArray.length; i--) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]]
    // }
    setAllQuestions(shuffleArr)
}
//i think this might be better handled inside the Quiz component: now that you have the indices, you display the questions in order of the numbers in that array.
//you pop out the index after it's shown.
//have a local variable to keep track of how many questions so far have been answered. Or run a loop until the returned array from randomize is empty.

  const submitAnswer = (answer) => {
    if (answer){
      setRight(gotRight+1)
    } else {
      setWrong(gotWrong+1)
    }
  }


  return (
    <>
    <StyledQuiz>
     <StyledText> How super cool! </StyledText>
     {allQuestions.map(question => (<Question key={question.id} question={question} submitAnswer={submitAnswer}/>))}
     <StyledButton type="submit">Submit!</StyledButton>
    </StyledQuiz>
    </>
  )
}

/* Actions needed:
- display question
 */

 export default Quiz;


 //use prop types here to check
