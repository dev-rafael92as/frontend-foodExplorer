import React, { useState } from 'react'
import { Container } from './styles'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const Counter = () => {
    const [ count, setCount ] = useState(1);
    return (
        <Container>
            <button 
                className='button-counter'
                onClick={() => setCount(count - 1)}
                disabled={count === 1}
            >
                <AiOutlineMinus/>
            </button>
            {count < 10 ? `0${count}` : count}
            <button 
                className='button-counter'
                onClick={() => setCount(count + 1)}
            >
                <AiOutlinePlus/>
            </button>
        </Container>
    )
}
