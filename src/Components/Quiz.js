import React, { useState, useEffect, useMemo } from 'react';
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
const StyledButton = styled.button`
  background-color: white;
`

const questionObj = {question: "", correct: "", incorrect: []}

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  // const [question, setQuestion] = useState();
  //recommended that we don't keep the question on state, but call it when it needs to be called with a get method...?
  //guess we could write a filter to do conditional rendering.
  const [questionIdx, setQuestionIdx] = useState(0);
  const [gotRight, setRight] = useState(0);
  const [gotWrong, setWrong] = useState(0);
  const [maxQuestions, setmaxQuestions] = useState(0)
  const [userAnswer, setUserAnswer] = useState("");

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch('/api/data');
        const questions = await response.json();
        // console.log("this is the response", questions)
        await setmaxQuestions(questions.length)
        randomize(questions);
        //allQuestions maps but not Questions. Why?
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
    setAllQuestions(shuffleArr)
  }
}

// const memoQuestions = useMemo(() => randomize(questions), [allQuestions] )
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

 const handleSelect = (e) => {
   setUserAnswer(e.target.value);
   submitAnswer();
 }

 const setNextQuestion = () => {
   setQuestionIdx(() => questionIdx + 1);
  //  setQuestion(() => allQuestions[questionIdx]);

 }

 //does showQuestion run before useEffect?
  const showQuestion = (question) => {
    if (maxQuestions > 0) {
      return (<Question question={question} submitAnswer={submitAnswer} />)
    }
  }



  return (
    <>
    {console.log("ALLQUESTIONS", allQuestions)}
    <StyledQuiz>
     <StyledText> How super cool! </StyledText>
     {/* {allQuestions.map(question => (<Question key={question.id} question={question} submitAnswer={submitAnswer}/>))}
     <StyledButton type="submit">Submit!</StyledButton> */}
     {/* {question && showQuestion()} */}
     { (questionIdx === maxQuestions ? <Result gotRight={gotRight} gotWrong={gotWrong} /> : showQuestion(allQuestions[questionIdx]))}
    </StyledQuiz>
    </>
  )
}

export default Quiz;

/* Actions needed:
- display question
 */
 //use prop types here to check
