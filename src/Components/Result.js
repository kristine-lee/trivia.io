//displays results.

import React from 'react';
import PropTypes from 'prop-types'
import {calculateScore} from './util'

const Result = ({gotRight, gotWrong}) => {
  const calculatedScore = calculateScore(gotRight, gotWrong)

  return (
    <div className="results">
      Correct: {gotRight}
      Incorrect: {gotWrong}
      Final Score: {calculatedScore} %
    </div>
  )
}

export default Result

Result.propTypes = {
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired,
  calculatedScore: PropTypes.number
}
