import Sidebar from "../components/sidebar.js"
import "../styles/pet.css";
import picturePet from '../images/ivosk.jpg'
import {FiUser, FiX} from 'react-icons/fi'
import api from "../services/api.js";
import React, { Component } from "react";




class Pet extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      breed: '',
      weight: '',
      gender: '',
      images: [],
      onImgIndex: 0
    }
  }
async componentDidMount() {
  
  const response = await api.get('/pets/1');
  console.log(response.data.pet)

  this.setState({
    name: response.data.name,
    age: response.data.age,
    breed: response.data.breed,
    weight: response.data.weight,
    gender: response.data.sexes[0].gender,
    images:  response.data.pet[0 ].path

  })

  //this.setState({user: response.data, pet:response.data.client[0]})
  //response.data.client[0].name
}

 render() {
  
const url = `http://localhost:3838/uploads`

  return (
    <div id= "page-Pet">
      <Sidebar/>
      <main>
        <div className= "pet-details">
         
            <div className= "main-image">
  
              <img src={this.state.images[this.state.onImgIndex]} alt={this.state.name}/>
            </div>

            <div className= "images">

            {this.state.images.map((image, index )=> {
              return (
                <button key={image.id} className={this.state.onImgIndex === index ? 'active': ''} type= "button" onClick= {() => this.setState({onImgIndex: index})}>
                <img src={image.path} alt={this.state.name}/>
              </button>
              )
            })}

            </div>
      
          <div className= "pet-details-content">
            <div className= "titular">
              <h1>{this.state.name}</h1>
              <h3> <span><FiUser size={24} color= "#12406a;"/></span></h3>
            </div>
          
          <hr/>

            <div className= "pet-details-field">
              <h2>Idade</h2>
              <p>{this.state.age} Anos</p>
            </div>

            <div className= "pet-details-field">
              <h2>Raça</h2>
              <p>{this.state.breed}</p>
            </div>

            <div className= "pet-details-field">
              <h2>Peso</h2>
              <p>{this.state.weight}</p>
            </div>

            <div className= "pet-details-field">
              <h2>Sexo</h2>
              <p> {this.state.gender}</p>
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

}


export default Pet