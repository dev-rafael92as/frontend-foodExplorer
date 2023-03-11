import React, { useState } from 'react'
import { RxCaretLeft } from 'react-icons/rx'
import ButtonText from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { FiUpload } from 'react-icons/fi'
import { InputEditDishe } from '../../components/InputEditDishe'
import { DropdownCategory } from '../../components/DropdownCategory'
import { TagIngredientEdit } from '../../components/TagIngredientEdit'
import Button from '../../components/Button'
import { Footer } from '../../components/Footer'

export const EditDishe = () => {
  const [ newTag, setNewTag ] = useState('');
  const [ ingredientTags, setIngredientTags ] = useState([]);

  const handleAddTag = () => {
    setIngredientTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  const handleRemoveTag = (deleted) => {
    setIngredientTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return (
    <Container>
        <Header admin={true} />

        <main>
          <ButtonText icon={RxCaretLeft} title="voltar" to="/"/>

          <h2>Editar prato</h2>

          <div>
            <div className='edit-dishe-firstRow'>
              <div className='edit-dishe-firstRow-imgFile'>
                <label htmlFor="img-dishe">Imagem do prato <span><FiUpload /> Selecione a imagem</span></label>
                
                <input 
                  type="file" 
                  id="img-dishe" 
                  // onChange={handleChangeAvatar}
                />
                
              </div>
              <div className='edit-dishe-firstRow-name'>
                <InputEditDishe labelTitle="Nome" placeholder="Ex.: Salada Ceasar" id="dishe-name" type="text"/>
              </div>
              <div className='edit-dishe-firstRow-category'>
                <DropdownCategory />
              </div>
            </div>
            <div className='edit-dishe-secondRow'>
              <div className='edit-dishe-secondRow-ingredients'>
              <label htmlFor="">Ingredientes</label>
                <div className='container-ingredients-tag'>
                {
                    ingredientTags.map((tag, index) => (
                        <TagIngredientEdit 
                            key={String(index)}
                            value={tag}
                            onClick={() => handleRemoveTag(tag)}
                        />
                    ))
                }
                <TagIngredientEdit
                    placeholder = "Adicionar"
                    value={newTag} 
                    isNew={true} 
                    onChange={e => setNewTag(e.target.value)}
                    onClick={handleAddTag}
                />
                </div>
              </div>
              <div className='edit-dishe-secondRow-price'>
                <InputEditDishe type="text" labelTitle="Preço" placeholder="R$00,00" id="dishe-price"/>
              </div>
            </div>

            <div className='edit-dish-lastRow'>
              <label htmlFor="dishe-description">Descrição</label>
              <textarea placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' name="" id="dishe-description" cols="30" rows="10"></textarea>
            </div>

            <div className='edit-dishe-saveButton'>
                <Button title="Salvar alterações" />
                <button className='edit-dishe-delete' type="button">Excluir prato</button>
            </div>

          </div>
        </main>
        <Footer />
    </Container>
  )
}
