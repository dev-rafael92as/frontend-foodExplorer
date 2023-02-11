import React from 'react'
import { Container } from './styles'

export const Footer = () => {
  return (
    <Container>
        <div className='container-footer'>
            <div className='logo-footer'>
                <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5391 0.909359L26.5294 8.40936V23.4094L13.5391 30.9094L0.548681 23.4094V8.40936L13.5391 0.909359Z" fill="#4D585E"/>
                </svg>
                food explorer
            </div>

            <p>
                © 2023 - Todos os direitos reservados.
            </p>
        </div>
    </Container>
  )
}
