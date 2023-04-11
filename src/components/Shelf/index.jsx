import React from 'react'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { ProductSummary } from '../ProductSummary'
import { ProductSummaryAdmin } from '../ProductSummaryAdmin'
import { Container } from './styles'

export const Shelf = ({title}) => {
  const { user, dishes } = useFoodExplorer()
  const admin = user?.isAdmin === 1 ? true : false

  const dishesCategory = dishes?.filter((dish) => dish.category.replace(' ', '') === title);
  return (
    <Container>
        <h2>{title}</h2>

        <div className='container-shelf'>
          {dishesCategory?.map((dishe) => (
            admin ? <ProductSummaryAdmin key={dishe.id} dishe={dishe}/> : <ProductSummary key={dishe.id} dishe={dishe}/>
            ))}
        </div>
    </Container>
  )
}
