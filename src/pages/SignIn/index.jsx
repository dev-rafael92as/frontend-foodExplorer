import React, { useState } from 'react'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import LogoApp from '../../components/LogoApp'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { Container } from './styles'

const SignIn = () => {
  const [ userEmail, setUserEmail ] = useState()
  const [ userPassword, setUserPassword ] = useState()

  const { signIn } = useFoodExplorer()

  const handleLogin = () => {
    signIn({email: userEmail, password: userPassword})
  }

  return (
    <Container>
        <LogoApp />

        <div className='container-content'>
            <h2>Faça login</h2>
            
            <div className='container-input'>
                <label>Email</label>
                <Input 
                  type="email"
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  onChange={e => setUserEmail(e.target.value)}></Input>
            </div>

            <div className='container-input'>
                <label>Senha</label>
                <Input 
                  type = 'password'
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setUserPassword(e.target.value)}></Input>
            </div>

            <div className='wrapper-button-access'>
            <Button onClick={handleLogin} title="Entrar" />
            </div>

            <div className='wrapper-button-createAccount'>
              <ButtonText to="/register" title="Criar uma conta"/>
            </div>
        </div>


    </Container>
  )
}

export default SignIn