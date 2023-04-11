import React, { useEffect, useState } from 'react'
import ButtonText from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Container } from './styles'
import  ImagePrato from '../../assets/mask-group-3.png'
import { TagIngredients } from '../../components/TagIngredients'
import { RxCaretLeft } from 'react-icons/rx'
import Button from '../../components/Button'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { api } from '../../services/api'


export const DetailsAdmin = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ ingredientsTags, setIngredientTags ] = useState([])
  const [ imageDishe, setImageDishe ] = useState(null)

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params?.id}`)

      const { title, description, price, ingredients, image } = response.data;
      setTitle(title);
      setDescription(description);
      setIngredientTags(ingredients.map(ingredient => ingredient.name));
      setImageDishe(image)
    }

    fetchDish();
  }, [])
  
  const imageProduct = `${api?.defaults?.baseURL}/files/${imageDishe}`


  return (
    <Container>
        <Header admin={true} />

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
                      {ingredientsTags.map((ingredient, index) => (
                        <TagIngredients key={index} title={ingredient} />
                      ))}
                    </div>

                    <div className='wrapper-edit-button'>
                      <Link to={`/edit/${params.id}`}>
                        <Button title="Editar Prato" />
                      </Link>
                    </div>
                  </div>
                </div>
            </div>

            <Footer />
    </Container>
  )
}
