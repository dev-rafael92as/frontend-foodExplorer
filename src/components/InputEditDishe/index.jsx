import React from 'react'
import { Container } from './styles'

export const InputEditDishe = ({labelTitle, id, type, ...rest}) => {
  return (
    <Container>
        <label htmlFor={id}>{labelTitle}</label>
        <input type={type} id={id} {...rest} /> 
    </Container>
  )
}
