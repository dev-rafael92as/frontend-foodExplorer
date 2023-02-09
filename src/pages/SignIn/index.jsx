import React from 'react'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import LogoApp from '../../components/LogoApp'
import { Container } from './styles'

const SignIn = () => {
  return (
    <Container>
        <LogoApp />

        <div className='container-content'>
            <h2>Faça login</h2>
            
            <div className='container-input'>
                <label>Email</label>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
            </div>

            <div className='container-input'>
                <label>Senha</label>
                <Input placeholder="No mínimo 6 caracteres"></Input>
            </div>

            <Button title="Entrar" />
            <ButtonText title="Criar uma conta"/>
        </div>


    </Container>
  )
}

export default SignIn