import React, { useState } from 'react'
import Button from '../../components/Button'
import ButtonText from '../../components/ButtonText'
import Input from '../../components/Input'
import LogoApp from '../../components/LogoApp'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'
import { Container } from './styles'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    const [ isLoading, setIsLoading ] = useState(false)

    const navigate = useNavigate()

    const {  } = useFoodExplorer()

    const handleSingUp = () => {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos')
        } 

        if (password.length < 6) {
            return alert('A senha deve conter no mínimo 6 caracteres')
        }

        setIsLoading(true)

        api.post('/users', {name, email, password}).then(() => {
            alert('Usuário cadastrado com sucesso')
            navigate('/')

            setIsLoading(false)
        })

        .catch(error => {
           if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível cadastrar')
            }

        setIsLoading(false)
        })
    }


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
                <Button 
                    onClick={handleSingUp} 
                    title="Criar conta" 
                    disabled={isLoading}
                />
            </div>

            <div className='wrapper-button-to-singIn'>
                <ButtonText to="/" title="Já tenho uma conta" />
            </div>
        </div>
    </Container>
  )
}

export default SignUp