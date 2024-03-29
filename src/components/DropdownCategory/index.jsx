import React, { useState } from 'react'
import { Container } from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'

export const DropdownCategory = () => {
    const { selectedCategory, setSelectedCategory } = useFoodExplorer()
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const hadleSelectCategory = (value) => {
    setSelectedCategory(value)
    setIsOpen(!isOpen)
  }

  return (
    <Container>
        <label htmlFor="dishe-category">Categoria</label>
        <div>
            <button onClick={toggleDropdown}>{selectedCategory} {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }</button>
            {isOpen && (
                <ul>
                    <li onClick={(e) => hadleSelectCategory(e.target.innerHTML)}>Refeições</li>
                    <li onClick={(e) => hadleSelectCategory(e.target.innerHTML)}>Sobremesas</li>
                    <li onClick={(e) => hadleSelectCategory(e.target.innerHTML)}>Bebidas</li>
                </ul>
            )}
        </div>
    </Container>
  )
}
