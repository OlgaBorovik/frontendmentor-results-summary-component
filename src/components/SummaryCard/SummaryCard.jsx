import React from 'react'
import { Card, CardIcon, CardText, CardScore, CardTotalScore } from './SummaryCard.styled'
import {reaction, memory, verbal, visual} from '../../../public/assets/index'

const SummaryCard = ({category, score, icon}) => {
  console.log(icon)
  return (
    <Card className={category}>
      
      <CardIcon src={icon} alt="icon" />
        <CardText>{category}</CardText>
        <CardTotalScore><CardScore>{score}</CardScore> / 100</CardTotalScore>
          
    </Card>
  )
}

export default SummaryCard