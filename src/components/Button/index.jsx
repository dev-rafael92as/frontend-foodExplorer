import React from 'react'
import { Container } from './styles'

const Button = ({icon: Icon, title, ...rest}) => {
  return (
    <Container type="button" {...rest}>
        {Icon && <Icon size={16}/>}
        {title}
    </Container>
  )
}

export default Button