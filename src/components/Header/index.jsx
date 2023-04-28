import React, { useState } from 'react'
import Button from '../Button'
import { Container } from './styles'
import {TbReceipt} from 'react-icons/tb'
import {FaSignOutAlt} from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import ButtonText from '../ButtonText'
import { Link } from 'react-router-dom'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Footer } from '../Footer'
import { AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
    const { user, signOut } = useFoodExplorer()
    const [ isMenuOpen, setIsMenuOpen] = useState(false)

    const menuContentMobile = () => {
        return (
            <div className='menuMobile-container'>
                <div className='menuMobile-header'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}><AiOutlineClose/></button>
                    Menu
                </div>
                <div className='menuMobile-contentMenu'>
                    <div className='menuMobile-container-input'>
                        <BiSearch />
                        <input type="text" placeholder='Busque por pratos ou ingredientes' />
                    </div>
                    <ul>
                        {user?.isAdmin === 1 ?
                            <li>
                                <Link to="/new-dishe" onClick={() => setIsMenuOpen(!isMenuOpen)}>Novo Prato</Link>  
                            </li> :
                            <></>
                        }
                        <li>
                            <button onClick={signOut}>Sair</button>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }

    let isMobile
    if (window.innerWidth < 700) {
        isMobile = true
    } else {
        isMobile = false
    }
    console.log("isMenuOpen", isMenuOpen)
  return (
    <Container>
        {
            !isMobile ? 
            <>
                <div className='wrapper-content-header'>
                    <Link to="/" className={user?.isAdmin === 1 ? `logo-header style-admin` : "logo-header"}>
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
                        {user?.isAdmin === 1 ? <Link to="/new-dishe"><Button title="Novo Prato"/></Link> : <Button icon={TbReceipt} title={`Pedidos (${0})`}/>}
                    </div>

                    <ButtonText onClick={signOut} to="/" icon={FaSignOutAlt} title=""/>
                </div>
            </> : <>
                {isMenuOpen ? menuContentMobile() : ""}
                <div className='wrapper-content-header'>
                    <button className='menu-hamburguer-mobile' onClick={() => setIsMenuOpen(!isMenuOpen)}><RxHamburgerMenu/></button>

                    <Link to="/" className={user?.isAdmin === 1 ? `logo-header style-admin` : "logo-header"}>
                        <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
                        </svg>
                        food explorer
                    </Link>

                    {user?.isAdmin === 1 
                        ?
                        <></>
                        : 
                        <button className='button-orders'>
                            <TbReceipt />
                            <span className='count-orders'>0</span>
                        </button>    
                    }
                </div>
            </>
        }
        
    </Container>
  )
}
