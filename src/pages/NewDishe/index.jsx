import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi';
import { RxCaretLeft } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import ButtonText from '../../components/ButtonText';
import { DropdownCategory } from '../../components/DropdownCategory';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header'
import { InputEditDishe } from '../../components/InputEditDishe';
import { TagIngredientEdit } from '../../components/TagIngredientEdit';
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext';
import { api } from '../../services/api';
import { Container } from './styles'

export const NewDishe = () => {
    const { user, selectedCategory } = useFoodExplorer();
    
    const [ newIngredient, setNewIngredient ] = useState('');
    const [ ingredientTags, setIngredientTags ] = useState([]);

    const [imageFile, setImageFile] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    // const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleAddTag = () => {
        setIngredientTags(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    const handleRemoveTag = (deleted) => {
        setIngredientTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewDish() {
      if (!imageFile) {
        return alert("Adicione uma imagem para o prato")
      }
  
      if (!title) {
        return alert("Adicione um titulo para o prato")
      }
  
      if (!description) {
        return alert("Adicione uma descrição para o prato")
      }
  
      if (!selectedCategory) {
        return alert("Adicione uma categoria para o prato")
      }
  
      if (!price) {
        return alert("Adicione um preço para o prato")
      }
  
      if (newIngredient) {
        return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
      }
  
      if (ingredientTags.length < 1) {
        return alert("Adicione pelo menos um ingrediente")
      }
  
      setLoading(true);
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", selectedCategory);
      formData.append("price", price);
  
      ingredientTags.map(ingredient => (
        formData.append("ingredients", ingredient)
      ))
  
      await api.post("/dishes", formData);
      alert("Prato cadastrado com sucesso");
      navigate("/")
  
      setLoading(false);
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
                {imageFile ? <label htmlFor="img-dishe">Imagem do prato <span><FiUpload /> {imageFile.name}</span></label> : <label htmlFor="img-dishe">Imagem do prato <span><FiUpload /> Selecione a imagem</span></label> }
                
                <input 
                  type="file" 
                  id="img-dishe" 
                  onChange={e => setImageFile(e.target.files[0])}
                />
                
              </div>
              <div className='edit-dishe-firstRow-name'>
                <InputEditDishe onChange={e => setTitle(e.target.value)} labelTitle="Nome" placeholder="Ex.: Salada Ceasar" id="dishe-name" type="text"/>
              </div>
              <div className='edit-dishe-firstRow-category'>
                <DropdownCategory  onChange={e => setCategory(e.target.value)}/>
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
                    value={newIngredient} 
                    isNew={true} 
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddTag}
                />
                </div>
              </div>
              <div className='edit-dishe-secondRow-price'>
                <InputEditDishe onChange={e => setPrice(e.target.value)} type="text" labelTitle="Preço" placeholder="R$00,00" id="dishe-price"/>
              </div>
            </div>

            <div className='edit-dish-lastRow'>
              <label htmlFor="dishe-description">Descrição</label>
              <textarea onChange={e => setDescription(e.target.value)} placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' name="" id="dishe-description" cols="30" rows="10"></textarea>
            </div>

            <div className='edit-dishe-saveButton'>
                <Button 
                  title={ loading ? "Adicionando pedido" : "Adicionar pedido"} 
                  onClick={handleNewDish}
                  disabled={loading}  
                />
            </div>

          </div>
        </main>
        <Footer />
    </Container>
  )
}
