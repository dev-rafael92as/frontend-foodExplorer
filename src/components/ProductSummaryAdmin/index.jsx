import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { SlPencil } from 'react-icons/sl'
import Button from '../Button'
import { Counter } from '../Counter'
import imageProduct from '../../assets/mask-group-3.png'


export const ProductSummaryAdmin = ({...rest}) => {
  return (
    <Container>
            <img src={imageProduct} alt="" />
        <Link to="/edit">
            <SlPencil />
        </Link>

        <div className='container-infoProduct'>
            <Link to="/details-admin">
                <h4>Spaguetti Gambe  &gt;</h4>
                <p>Massa fresca com camarões e pesto.</p>

                <p className='sellingPrice'>
                    R$ 79,97
                </p>
            </Link>

            {/* <div className='container-counter'>
                <Counter />
                
                <div className='wrapper-buy-button'>
                    <Button title="incluir"/>
                </div>
            </div> */}
        </div>
    </Container>
  )
}
