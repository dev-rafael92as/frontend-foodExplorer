import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi';
import { RxCaretLeft } from 'react-icons/rx';
import Button from '../../components/Button';
import ButtonText from '../../components/ButtonText';
import { DropdownCategory } from '../../components/DropdownCategory';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header'
import { InputEditDishe } from '../../components/InputEditDishe';
import { TagIngredientEdit } from '../../components/TagIngredientEdit';
import { Container } from './styles'

export const NewDishe = () => {
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

          <h2>Adicionar prato</h2>

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
            </div>

          </div>
        </main>
        <Footer />
    </Container>
  )
}
