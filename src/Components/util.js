//functions for randomizing the order of indices
//for getting a question and then popping it out of the array
//for calculating the score at the end

export function randomize(array){
  let copyArray = [...array]
  for (let i = copyArray.length - 1; i < copyArray.length; i--) {
    let j =   Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]]
  }
  return copyArray

}

//calculating the score:
//right and wrong are numbers
export function calculateScore(right, wrong){
  return Math.round((right / (right + wrong)) * 100)
}//add a percentage sign in the component

