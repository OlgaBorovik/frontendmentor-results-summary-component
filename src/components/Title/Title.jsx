import React, { Children } from 'react'
import { Heading } from './Title.styled'

const Title = ({ children, style }) => {
  return (
    <Heading style={style} >{children}</Heading>
  )
}

export default Title