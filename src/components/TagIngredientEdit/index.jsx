import React from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export const TagIngredientEdit = ({value, isNew, onClick, ...rest}) => {
  return (
    <Container isNew={isNew}>
            <input
                type="text" 
                value={value}
                readOnly={!isNew}
                {...rest} 
            />
            <button
                type="button"
                onClick={onClick}
            >
                {isNew ? <FiPlus/> : <FiX />}
            </button>
        </Container>
  )
}
