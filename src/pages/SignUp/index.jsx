import React from 'react'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import LogoApp from '../../components/LogoApp'
import { Container } from './styles'

const SignUp = () => {
  return (
    <Container>
        <LogoApp />

        <div className='container-content'>
            <h2>Crie sua conta</h2>
            <div className='container-input'>
                <label>Seu Nome</label>
                <Input placeholder="Exemplo: Maria da Silva"></Input>
            </div>

            <div className='container-input'>
                <label>Email</label>
                <Input placeholder="Exemplo: exemplo@exemplo.com.br"></Input>
            </div>

            <div className='container-input'>
                <label>Senha</label>
                <Input placeholder="No mínimo 6 caracteres"></Input>
            </div>

            <Button title="Criar conta" />

            <div className='wrapper-button-to-singIn'>
                <ButtonText to="/" title="Já tenho uma conta" />
            </div>
        </div>
    </Container>
  )
}

export default SignUp