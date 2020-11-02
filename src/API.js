import {shuffleArray} from './Components/util';

export const fetchQuestions = async () => {
  const data = await fetch('/api/data')
  const questions = await data.json()
  console.log("fetched", questions)
  const shuffledData = shuffleArray(questions);
  return shuffledData.map(question => ({
    ...question,
    answers: shuffleArray([...question.incorrect, question.correct])
  }))
}
