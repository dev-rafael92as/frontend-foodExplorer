import React, { useEffect, useState } from 'react'
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
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { useFoodExplorer } from '../../hooks/useFoodExplorerContext'

export const EditDishe = () => {
  const { user, selectedCategory, setSelectedCategory } = useFoodExplorer();

  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const [ ingredientTags, setIngredientTags ] = useState([]);
  const [ newIngredient, setNewIngredient ] = useState('');

  const handleAddTag = () => {
    setIngredientTags(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  const handleRemoveTag = (deleted) => {
    setIngredientTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleUpdateDish() {
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
      return alert("Adicione um categoria para o prato")
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

    setLoading(true)
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", selectedCategory);
    formData.append("price", price);

    ingredientTags.map(ingredient => (
      formData.append("ingredients", ingredient)
    ))

    await api.put(`/dishes/${params.id}`, formData);
    alert("Prato atualizado com sucesso");
    navigate("/");
    setLoading(false);
  }

  const handleDeleteDishe = async () => {
    setLoading(true)
    alert("Tem certeza que deseja remover esse prato?");

    await api.delete(`dishes/${params.id}`)
    alert("Prato removido com sucesso");
    navigate("/");
    setLoading(false);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      const { title, description, category, price, ingredients } = response.data;
      setTitle(title);
      setDescription(description);
      setSelectedCategory(category);
      setPrice(price);
      setIngredientTags(ingredients.map(ingredient => ingredient.name));
    }

    fetchDish();
  }, [])

  return (
    <Container>
        <Header admin={true} />

        <main>
          <ButtonText icon={RxCaretLeft} title="voltar" to="/"/>

          <h2>Editar prato</h2>

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
                <InputEditDishe 
                  labelTitle="Nome" 
                  placeholder="Ex.: Salada Ceasar" 
                  id="dishe-name" 
                  type="text"
                  value={title ? title : ""}
                  onChange={e => setTitle(e.target.value)}  
                />
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
                    value={newIngredient} 
                    isNew={true} 
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={handleAddTag}
                />
                </div>
              </div>
              <div className='edit-dishe-secondRow-price'>
                <InputEditDishe 
                  type="text" 
                  labelTitle="Preço" 
                  placeholder="R$00,00" 
                  id="dishe-price"
                  value={price ? price : ""}
                  onChange={e => setPrice(e.target.value)}
                  />
              </div>
            </div>

            <div className='edit-dish-lastRow'>
              <label htmlFor="dishe-description">Descrição</label>
              <textarea 
                placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' 
                name="" 
                id="dishe-description" 
                cols="30" 
                rows="10"
                value={description ? description : ""}
                onChange={e => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div className='edit-dishe-saveButton'>
                <Button 
                  title={loading ? "Salvando pedido" : "Atualizar pedido"} 
                  onClick={handleUpdateDish}
                  disabled={loading}
                />
                <button 
                  className='edit-dishe-delete' 
                  type="button"
                  onClick={handleDeleteDishe}
                  disabled={loading}
                >
                  {loading ? "Excluindo prato" : "Excluir prato"}
                </button>
            </div>

          </div>
        </main>
        <Footer />
    </Container>
  )
}
