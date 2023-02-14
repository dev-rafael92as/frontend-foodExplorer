import React from 'react'
import { Container } from './styles'

export const AddToCart = ({price, ...rest}) => {
  return (
    <Container>
        <button {...rest}>
            {`incluir ∙ R$${price}`}
        </button>
    </Container>
  )
}
