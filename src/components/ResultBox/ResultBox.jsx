import React from 'react'
import Title from '../Title/Title'
import Result from '../Result/Result'

import {Results, ResultsCongratulations, ResultsText} from './ResultBox.styled'

const ResultBox = () => {
  return (
    
    <Results >
      <Title style={{ color: "#ffffff" }}>Your result</Title>
      <Result/>
      <ResultsCongratulations>Great</ResultsCongratulations>
      <ResultsText>Your performance exceed 65% of the people conducting the test here!</ResultsText>
    
    </Results>
  )
}

export default ResultBox