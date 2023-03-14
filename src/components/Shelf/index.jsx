import React from 'react'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { ProductSummary } from '../ProductSummary'
import { ProductSummaryAdmin } from '../ProductSummaryAdmin'
import { Container } from './styles'

export const Shelf = ({title}) => {
  const { user, dishes } = useFoodExplorer()
  const admin = user?.isAdmin === 1 ? true : false

  // console.log("dishes", dishes)

  const dishesCategory = dishes?.filter((dish) => dish.category === title);
  // console.log("dishesCategory", dishesCategory)
  return (
    <Container>
        <h2>{title}</h2>

        <div className='container-shelf'>
          {dishesCategory.map((dishe) => (
            <ProductSummary key={dishe.id} dishe={dishe}/>
            ))}
            {/* {admin ? <ProductSummaryAdmin/> : <ProductSummary />} */}
            {/* {admin ? <ProductSummaryAdmin/> : <ProductSummary />} */}
        </div>
    </Container>
  )
}
