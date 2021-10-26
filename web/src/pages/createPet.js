import React, { useState } from "react";
import "../styles/pages/createPet.css"
import {BiImageAdd} from 'react-icons/bi';
//import Ivi from '../images/ivosk.jpg'
import Sidebar from '../components/sidebar.js'
import api from '../services/api.js'
import { useHistory } from "react-router";

export default function CreatePet () {



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
    if (!clientId) {
    return 
    }

  clientId = JSON.parse(clientId)

    console.log(data)
    await api.post(`/clients/${clientId}/pets`, data)
    alert('Cadastro efetuado com sucesso');

    

    history.push('/clients')
}



  return (
    <div id= "page-create-Pet"> 
      
      <Sidebar/>
      <main>
        <form onSubmit={handleSubmit}  className= "create-Pet-Form">
        <fieldset>
         
          <legend>Cadastro do Pet </legend>

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
                  <input id= "weight" type= "radio"  name= "gender" value= {gender} onChange= {event=> setGender(event.target.value = 'fêmea' )}/>
                  <span>Fêmea</span>
                </div>

                <div>
                  <input id= "weight" type= "radio"  name= "gender" value= {gender} onChange= {event=> setGender(event.target.value = 'macho')}/>
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
          <button className= "confirm-button" type= "submit">
              Confirmar 
          </button>
        </form>
      </main>
    </div>
  )
}
