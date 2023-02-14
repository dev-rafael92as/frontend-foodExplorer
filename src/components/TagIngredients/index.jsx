import React from 'react'
import { Container } from './styles'

export const TagIngredients = ({title, ...rest}) => {
  return (
    <Container {...rest}>
        {title}
    </Container>
  )
}
