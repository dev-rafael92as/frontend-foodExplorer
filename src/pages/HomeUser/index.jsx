import React, { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MainBanner } from '../../components/MainBanner'
import { Shelf } from '../../components/Shelf'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { api } from '../../services/api'
import { Container } from './styles'

export const HomeUser = () => {
  const  { dishes, setDishes, isLoading, setIsLoading } = useFoodExplorer()
  
  useEffect(() => {
    setIsLoading(true)
    const showDishes = async () => {

      const getDishes = await api.get('/dishes?title')
      const { data } = getDishes

      setDishes(data)
      setIsLoading(false)
    } 

    showDishes()
  }, [])

  return (
    <Container>
      <Header />
      
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
