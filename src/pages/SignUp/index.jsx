import React, { useState } from 'react'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import LogoApp from '../../components/LogoApp'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { Container } from './styles'

const SignUp = () => {
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    const {  } = useFoodExplorer()

  return (
    <Container>
        <LogoApp />

        <div className='container-content'>
            <h2>Crie sua conta</h2>
            <div className='container-input'>
                <label>Seu Nome</label>
                <Input
                    type='text'
                    placeholder="Exemplo: Maria da Silva"
                    onChange={e => setName(e.target.value)}    
                ></Input>
            </div>

            <div className='container-input'>
                <label>Email</label>
                <Input
                    type="email" 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setEmail(e.target.value)}
                ></Input>
            </div>

            <div className='container-input'>
                <label>Senha</label>
                <Input 
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    onChange={e => setPassword(e.target.value)}
                ></Input>
            </div>

            <div className='wrapper-button-create-account'> 
                <Button title="Criar conta" />
            </div>

            <div className='wrapper-button-to-singIn'>
                <ButtonText to="/" title="Já tenho uma conta" />
            </div>
        </div>
    </Container>
  )
}

export default SignUp