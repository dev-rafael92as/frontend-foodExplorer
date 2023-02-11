import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MainBanner } from '../../components/MainBanner'
import { Shelf } from '../../components/Shelf'
import { Container } from './styles'

export const HomeUser = () => {
  return (
    <Container>
      <Header admin={false}/>
      
      <main className='container-main-content'>
        <MainBanner />

        <div className='container-shefs'>
          <Shelf title="Refeições"></Shelf>
          <Shelf title="Sobremesas"></Shelf>
          <Shelf title="Bebidas"></Shelf>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
