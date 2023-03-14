import React, { useState } from 'react'
import { Container } from './styles'
import imageProduct from '../../assets/mask-group-3.png'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi'
import Button from '../Button'
import { Counter } from '../Counter'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export const ProductSummary = ({ dishe, ...rest}) => {
    const [ wishProduct, setWishProduct ] = useState(false)

    const imageProduct = `${api.defaults.baseURL}/files/${dishe.image}` 
    console.log("dishe", dishe)

    // const currencyFormat = new Intl.NumberFormat('pt-BR', {
    //     style: 'currency',
    //     currency: 'BRL',
    //     minimumFractionDigits: 2,
    //     maximumFractionDigits: 2
    // }).format(dishe.price)

    return (
    <Container {...rest}>
        <Link to="/details">
            <img src={imageProduct} alt="" />
        </Link>
        <button 
            className='whishlist-button'
            onClick={() => setWishProduct(!wishProduct)}    
        >
            { wishProduct ? <HiHeart /> : <HiOutlineHeart/>}
        </button>

        <div className='container-infoProduct'>
            <Link to="/details">
                <h4>{dishe.title}  &gt;</h4>
                <p>{dishe.description}</p>

                <p className='sellingPrice'>
                    {dishe.price}
                </p>
            </Link>

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
