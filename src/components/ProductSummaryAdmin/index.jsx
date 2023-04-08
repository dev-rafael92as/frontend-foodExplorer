import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import { SlPencil } from 'react-icons/sl'
import { api } from '../../services/api'


export const ProductSummaryAdmin = ({ dishe, ...rest}) => {
    const imageProduct = `${api.defaults.baseURL}/files/${dishe.image}` 

    console.log(dishe)
    return (
    <Container>
            <img src={imageProduct} alt="" />
        <Link to="/edit">
            <SlPencil />
        </Link>

        <div className='container-infoProduct'>
            <Link to="/details-admin">
                <h4>{dishe?.title}  &gt;</h4>
                <p>{dishe?.description}</p>

                <p className='sellingPrice'>
                    {dishe?.price}
                </p>
            </Link>

        </div>
    </Container>
    )
}
