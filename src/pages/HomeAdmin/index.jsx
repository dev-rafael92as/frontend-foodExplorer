import React, { useEffect } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MainBanner } from '../../components/MainBanner'
import { Shelf } from '../../components/Shelf'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { api } from '../../services/api'
import { Container } from '../HomeUser/styles'

export const HomeAdmin = () => {
  const  { dishes, setDishes, isLoading, setIsLoading, user } = useFoodExplorer()
  
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
  console.log("dishes", dishes)

  const admin = user?.isAdmin === 1 ? true : false

  return (
    <Container>
      <Header admin={admin}/>
      
      <main className='container-main-content'>
        <MainBanner />

        <div className='container-shefs'>
          <Shelf admin={admin} title="Refeições"></Shelf>
          <Shelf admin={admin} title="Sobremesas"></Shelf>
          <Shelf admin={admin} title="Bebidas"></Shelf>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
