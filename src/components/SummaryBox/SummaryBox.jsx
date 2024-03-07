import React from 'react'
import SummaryList from '../SummaryList/SummaryList'
import Button from '../Button/Button'
import Title from '../Title/Title'

const SummaryBox = () => {
   
  return (
    <div className='container'>
      <Title style={{ color: "var(--darkGreyBlue)", textAlign: "left"}}>Summary</Title>
          <SummaryList />
          <Button/>
          
    </div>
  )
}

export default SummaryBox