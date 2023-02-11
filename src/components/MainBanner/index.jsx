import React from 'react'
import { Container } from './styles'
import ImageMainBanner from '../../assets/imageMainBanner.png'

export const MainBanner = () => {
  return (
    <Container>
        {/* <div> */}
            <img src={ImageMainBanner} alt="Imagem de macarrons coloridos caindo, junto com amoras e framboesas" />
            
            <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        {/* </div> */}
    </Container>
  )
}
