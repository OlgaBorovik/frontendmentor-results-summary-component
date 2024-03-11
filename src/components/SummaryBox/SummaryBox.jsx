import React from 'react'
import SummaryList from '../SummaryList/SummaryList'
import { SumBox } from './SummaryBox.styled'
import Button from '../Button/Button'
import Title from '../Title/Title'

const SummaryBox = () => {
   
  return (
    <SumBox>
      <Title style={{ color: "var(--darkGreyBlue)", textAlign: "left"}}>Summary</Title>
          <SummaryList />
          <Button/>
          
    </SumBox>
  )
}

export default SummaryBox