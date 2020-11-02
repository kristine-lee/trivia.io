//displays results.

import React from 'react';

const Result = ({correct, incorrect}) => {
  return (
    <div className="results">
      Correct: {correct}
      Incorrect: {incorrect}
    </div>
  )
}

export default Result
