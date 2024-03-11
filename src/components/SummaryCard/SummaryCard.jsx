import React from 'react'
import { Card, CardIcon, CardText, CardScore, CardTotalScore } from './SummaryCard.styled'

const SummaryCard = ({category, score, icon}) => {
  return (
    <Card className={category}>
      
      <CardIcon src={icon} alt="icon" />
        <CardText>{category}</CardText>
        <CardTotalScore><CardScore>{score}</CardScore> / 100</CardTotalScore>
          
    </Card>
  )
}

export default SummaryCard