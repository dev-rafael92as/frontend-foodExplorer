import React from 'react'
import ButtonText from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Container } from './styles'
import  ImagePrato from '../../assets/mask-group-3.png'
import { TagIngredients } from '../../components/TagIngredients'
import { RxCaretLeft } from 'react-icons/rx'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer'


export const DetailsAdmin = () => {
  return (
    <Container>
        <Header admin={true} />

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

                    <div className='wrapper-edit-button'>
                      <Link to="/edit">
                        <Button title="Editar Prato" />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>

            <Footer />
    </Container>
  )
}
