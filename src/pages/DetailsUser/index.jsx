import React from 'react'
import ButtonText from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { RxCaretLeft } from 'react-icons/rx'
import  ImagePrato from '../../assets/mask-group-3.png'
import { TagIngredients } from '../../components/TagIngredients'
import { Counter } from '../../components/Counter'
import { AddToCart } from '../../components/AddToCart'

export const Details = () => {
  return (
    <Container>
        <Header />
            <div className='container-details'>
                <ButtonText icon={RxCaretLeft} title="voltar" to="/"/>

                <div className='container-details-infos'>
                  <img src={ImagePrato} alt="" />

                  <div className='container-details-moreInfos'>
                    <h2>Salada Ravanello</h2>
                    <p>
                      Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
                    </p>

                    <div className='container-details-ingredients'>
                      <TagIngredients title="alface" />
                      <TagIngredients title="cebola" />
                    </div>

                    <div className='container-details-counter'>
                      <Counter />
                      <AddToCart price="25,00" />
                    </div>
                  </div>
                </div>
            </div>
        <Footer />
    </Container>
  )
}
