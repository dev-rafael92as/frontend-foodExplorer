import React from 'react'
import Button from '../Button'
import { Container } from './styles'
import {TbReceipt} from 'react-icons/tb'
import {FaSignOutAlt} from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import ButtonText from '../ButtonText'
import { Link } from 'react-router-dom'

export const Header = ({admin}) => {
  return (
    <Container>
        <div className='wrapper-content-header'>
        <Link to="/" className={`logo-header style-admin`}>
            <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
            </svg>
            food explorer
        </Link>

        <div className='search-input-header'>
            <BiSearch />
            <input type="text" name="" id="" placeholder='Busque por pratos ou ingredientes'/>
        </div>

        <div className='container-button'>
            {admin ? <Link to="/new-dishe"><Button title="Novo Prato"/></Link> : <Button icon={TbReceipt} title={`Pedidos (${0})`}/>}
        </div>

        <ButtonText to="/" icon={FaSignOutAlt} title=""/>
        </div>
    </Container>
  )
}
