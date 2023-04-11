import React, { useEffect, useState } from 'react'
import ButtonText from '../../components/ButtonText'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { RxCaretLeft } from 'react-icons/rx'
import { TagIngredients } from '../../components/TagIngredients'
import { Counter } from '../../components/Counter'
import { AddToCart } from '../../components/AddToCart'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

export const DetailsUser = () => {
  const params = useParams()
  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ ingredientsTags, setIngredientTags ] = useState([])
  const [ imageDishe, setImageDishe ] = useState(null)

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)

      const { title, description, price, ingredients, image } = response.data;
      setTitle(title);
      setDescription(description);
      setPrice(price);
      setIngredientTags(ingredients.map(ingredient => ingredient.name));
      setImageDishe(image)
    }

    fetchDish();
  }, [])

  const imageProduct = `${api.defaults.baseURL}/files/${imageDishe}` 

  return (
    <Container>
        <Header />
            <div className='container-details'>
                <ButtonText icon={RxCaretLeft} title="voltar" to="/"/>

                <div className='container-details-infos'>
                  <img src={imageProduct} alt="" />

                  <div className='container-details-moreInfos'>
                    <h2>{title}</h2>
                    <p>
                      {description}
                    </p>

                    <div className='container-details-ingredients'>
                      {ingredientsTags.map((ingredient) => (
                        <TagIngredients title={ingredient} />
                      ))}
                    </div>

                    <div className='container-details-counter'>
                      <Counter />
                      <AddToCart price={price} />
                    </div>
                  </div>
                </div>
            </div>
        <Footer />
    </Container>
  )
}
