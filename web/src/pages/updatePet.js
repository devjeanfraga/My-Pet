import React, { useState } from "react";
import "../styles/pages/updatePet.css"
import {BiImageAdd} from 'react-icons/bi';
import {FiX} from 'react-icons/fi'
//import Ivi from '../images/ivosk.jpg'
import Sidebar from '../components/sidebar.js'
import api from '../services/api.js'
import { useHistory } from "react-router";

export default function UpdatePet () {



  //const {clientId} = useParams()
 // console.log(clientId)
  const history = useHistory() 
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [breed, setBreed] = useState("")
  const [weight, setWeight] = useState("")
  const [gender, setGender] = useState("")
  const [images, setImages] = useState([])
  const [imagesPreviews, setPreviewImages] = useState([])

  

  function handleSelectImages(event) {
    
    if(!event.target.files) {
      return
    }

    const selecionarImagens = [...event.target.files]
    console.log(selecionarImagens)
    setImages(selecionarImagens)

    const selecionarPrevisualisacaoDeImagens = selecionarImagens.map(imagem =>{
      return URL.createObjectURL(imagem)
    })
    console.log(selecionarPrevisualisacaoDeImagens)

    setPreviewImages(selecionarPrevisualisacaoDeImagens)
    console.log(setPreviewImages)
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
 
    data.append('name', name);
    data.append('age', String(age));
    data.append('breed', breed);
    data.append('weight', weight);
    data.append('gender', gender);
    images.forEach(image => {
      data.append('images', image);
  });

    let clientId = localStorage.getItem('clientId')
    let petId = localStorage.getItem('petId')
    if (!clientId && !petId) {
    return 
    }

  clientId = JSON.parse(clientId)
  petId = JSON.parse(petId)

    console.log(data)
    await api.post(`/clients/${clientId}/pets/${petId}`, data)
    alert('Pet Atualizado com sucesso');

    

    history.push(`/pets/${petId}`)
}



  return (
    <div id= "page-update-Pet"> 
      
      <Sidebar/>
      <main>
        <form onSubmit={handleSubmit}  className= "create-Pet-Form">
        <fieldset>
         
          <legend> Atualizar Pet </legend>

            <div className= "input-block">
              <label htmlFor = "name"> Nome </label>
              <input id= "name" value= {name} onChange= {event => setName(event.target.value)}/>
            </div>

            <div className= "input-block">
              <label htmlFor= "age"> Idade </label>
              <input id="age" value={age} onChange= {event => setAge(event.target.value)} />
            </div>

            <div className= "input-block">
              <label htmlFor= "breed"> Raça </label>
              <input id="breed" value= {breed}  onChange= {event => setBreed(event.target.value)}/>
            </div>

            <div className= "input-block">
              <label htmlFor= "weight"> Peso </label>
              <input id= "weight" value= {weight} onChange= {event=> setWeight(event.target.value)}/>
            </div>

            <div className= "sexo">
              <label htmlFor= "gender"> Sexo do Pet </label>
                <div >
                  <input id= "weight" type= "radio"  name= "gender" value= {gender} onChange= {event=> setGender(event.target.value = 1)}/>
                  <span>Fêmea</span>
                </div>

                <div>
                  <input id= "weight" type= "radio"  name= "gender" value= {gender} onChange= {event=> setGender(event.target.value = 2)}/>
                  <span>Macho</span>
                </div>
            </div>

            <div className= "input-block">
              <label htmlFor= "images"> Imagens </label>
              
              <div className= "images-container">
                    {imagesPreviews.map((image)=> {
                      return <img key= {image} src= {image} alt= {name}/>
                    })}
                <label htmlFor= "image[]" className= "new-image">
                      <BiImageAdd size= {30} color= "#FFFF"/>
                </label>
              </div>
              <input multiple type="file" id= "image[]" value= "" onChange= {handleSelectImages}/>
            </div>
        </fieldset>

        <div className= "operacoes">
          <button  type= "submit">
              Confirmar 
          </button>

          <button type= "button"  onClick= {""}>
            <span> <FiX size= {45} color= "#FFF"/></span>
          </button>
        </div>
    
        </form>
      </main>
    </div>
  )
}
