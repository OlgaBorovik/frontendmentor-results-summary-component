import React from 'react'
import ResultBox from '../ResultBox/ResultBox'
import SummaryBox from '../SummaryBox/SummaryBox'
import { Comp } from './Component.styled'

const Component = () => {
  return (
      <Comp className='container'>
          <ResultBox />
          <SummaryBox/>
    </Comp>
  )
}

export default Component