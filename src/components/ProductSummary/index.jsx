import React, { useState } from 'react'
import { Container } from './styles'
import imageProduct from '../../assets/mask-group-3.png'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import Button from '../Button'
import { Counter } from '../Counter'

export const ProductSummary = () => {
    const [ wishProduct, setWishProduct ] = useState(false)

  return (
    <Container>
        <img src={imageProduct} alt="" />
        <button 
            className='whishlist-button'
            onClick={() => setWishProduct(!wishProduct)}    
        >
            { wishProduct ? <HiHeart /> : <HiOutlineHeart/>}
        </button>

        <div className='container-infoProduct'>
            <h4>Spaguetti Gambe  &gt;</h4>
            <p>Massa fresca com camarões e pesto.</p>

            <p className='sellingPrice'>
                R$ 79,97
            </p>

            <div className='container-counter'>
                <Counter />
                
                <div className='wrapper-buy-button'>
                    <Button title="incluir"/>
                </div>
            </div>
        </div>
    </Container>
  )
}
