import React from 'react'
import { ProductSummary } from '../ProductSummary'
import { ProductSummaryAdmin } from '../ProductSummaryAdmin'
import { Container } from './styles'

export const Shelf = ({title, admin}) => {
  return (
    <Container>
        <h2>{title}</h2>

        <div className='container-shelf'>
            {admin ? <ProductSummaryAdmin/> : <ProductSummary />}
            {admin ? <ProductSummaryAdmin/> : <ProductSummary />}
            {admin ? <ProductSummaryAdmin/> : <ProductSummary />}
            {admin ? <ProductSummaryAdmin/> : <ProductSummary />}
        </div>
    </Container>
  )
}
