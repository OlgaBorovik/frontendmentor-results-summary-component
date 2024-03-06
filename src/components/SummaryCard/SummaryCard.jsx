import React from 'react'

const SummaryCard = ({category, score, icon}) => {
  return (
      <div>
          <img src={icon} alt="" />
          <p>{category}</p>
          <p>{score} / 100</p>
          
    </div>
  )
}

export default SummaryCard