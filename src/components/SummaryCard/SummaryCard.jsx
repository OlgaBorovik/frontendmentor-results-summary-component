import React from 'react'
import { Card } from './SummaryCard.styled'

const SummaryCard = ({category, score, icon}) => {
  return (
    <Card className={category}>
      
      <img src={icon} alt="icon" />
        <p>{category}</p>
        <p>{score} / 100</p>
          
    </Card>
  )
}

export default SummaryCard