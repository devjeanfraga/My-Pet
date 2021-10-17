import Sidebar from "../components/sidebar.js"
import "../styles/pet.css";
//import picturePet from '../images/ivosk.jpg'
import {FiUser, FiX} from 'react-icons/fi'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";




export default function Pet () {

   const  objPet = {
      id: Number(),
      name: String(),
      age: Number(),
      breed: String(),
      weight: String(),
      gender: Array({sex: String()}),
      images: Array({id: Number(), path: String()}),
      imgIndex: 0,
      indexGender: 0,
      client_id: String()
    }
    
    
    const[pet, setPet]= useState(objPet)
    const [indexImgActive, setIndexImgActive]= useState(0)

    const {petId} = useParams()

    useEffect(()=>{
      api.get(`/clients/:clientId/pets/${petId}`).then(response => {
        setPet(response.data)
        console.log(response.data)
      })
    }, [])



  
  return (
    <div id= "page-Pet">
      <Sidebar/>
      <main>
        <div className= "pet-details">
         
            <div className= "main-image">
  
              <img src={pet.images[indexImgActive].path} alt={pet.name}  />
            </div>

            <div className= "images">

           
             {pet.images.map((image, index) => { return (
                <button key={image.id} className= {indexImgActive === index ? "active" : ""} type= "button" onClick= {()=> {setIndexImgActive(index)}}>

                <img src={image.path} alt={pet.name}/>
                
                </button>
             )})} 

              
          

            </div>
      
          <div className= "pet-details-content">
            <div className= "titular">
              <h1>{pet.name}</h1>
              <h3> <span><FiUser size={24} color= "#12406a"/> Owner: {pet.client_id}</span></h3>
            </div>
          
          <hr/>

            <div className= "pet-details-field">
              <h2>Idade</h2>
              <p>{pet.age} Anos</p>
            </div>

            <div className= "pet-details-field">
              <h2>Raça</h2>
              <p>{pet.breed}</p>
            </div>

            <div className= "pet-details-field">
              <h2>Peso</h2>
              <p>{pet.weight}</p>
            </div>

            <div className= "pet-details-field">
              <h2>Sexo</h2>
             { pet.gender.map((sex, index) => {return <p key= {index}> {sex.sex} </p>})  }
            </div>

            <button type= "button" className= "contact-button">
                Contactar o dono por Whatsapp 
            </button>
            
          </div>
          
          <div className= "operacoes">

            <button type= "button">
                Editar
            </button>

            <button type= "button" className= "red-button">
               <span> <FiX size= {45} color= "#FFF"/></span>
            </button>

          </div>
          
        </div>
      </main>
    </div>
  )
}




