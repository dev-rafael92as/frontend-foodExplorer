import React from 'react'
import { ProductSummary } from '../ProductSummary'
import { Container } from './styles'

export const Shelf = ({title}) => {
  return (
    <Container>
        <h2>{title}</h2>

        <div className='container-shelf'>
            <ProductSummary />
        </div>
    </Container>
  )
}
