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

// export function indexArray(array){
//   let indexArray = [];
//   for (let i = 0; i < array.length; i++){
//     indexArray.push(i)
//   }
//   indexArray.
// }
//get an array of questions
//randomize indices [0 to array.length-1]
//return the randomized order of things

//i think this might be better handled inside the Quiz component: now that you have the indices, you display the questions in order of the numbers in that array.
//you pop out the index after it's shown.
//have a local variable to keep track of how many questions so far have been answered. Or run a loop until the returned array from randomize is empty.

//calculating the score:
//right and wrong are numbers
export function calculateScore(right, wrong){
  return Math.round((right / (right + wrong)) * 100)
}//add a percentage sign in the component

