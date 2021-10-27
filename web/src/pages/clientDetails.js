import Sidebar from "../components/sidebar.js"
import "../styles/pages/clientDetails.css";

import {FiUser} from 'react-icons/fi'
import {MdPets} from 'react-icons/md'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";
import {Link, useParams, useHistory } from "react-router-dom"
//import Clients from "./clients.js";





export default function ClientDetails () {
  const history = useHistory()

  const Client = {
    id: Number(),
    name: String(),
    phone: String(),
    email: String(),
    pets: Array({
      id: Number(),
      name: String(),
      breed: String()
    })
  }

  const [client, setClient] = useState([Client])
  const {clientId} = useParams()
  

  useEffect(() => {

    


    api.get(`/clients/${clientId}`).then(res => {
      setClient(res.data)
      console.log(res.data)
    })
  }, [clientId])

  

  //Guardar o nome e  o Id do dono do pet
  localStorage.setItem('name', JSON.stringify(client.name))

  localStorage.setItem('clientId', JSON.stringify(clientId))

  async function handlesDeleteClient () {
    const answer = window.confirm('Deseja excluir o cadastro?');
      if(answer === true){
        await api.delete(`/clients/${clientId}`)
        alert("Cadastro Excluído com sucesso")
        history.push('/clients')
       
    }else{
      return
    }
  }

  return (
    <div id= "page-Client-Details">
      <Sidebar/>
      <main>
        <div className= "client-details">
      
          <div key= {client.id} className= "client-details-content">

            <div className= "titular"> 
              <h3>
                <span><FiUser size={24} color= "#12406a"/> {client.name} | ID - {client.id} </span>
              </h3>
            </div>
              
            <hr/>

            <div className= "client-details-field">
              <h2>Phone</h2>
                <p> {client.phone} </p>
            </div>

            <div className= "client-details-field">
              <h2>Email</h2>
                <p> {client.email} </p>
            </div>

            <div className=  "clients-functions">
              <Link to= "/update-client" className= "operation">
                Editar Cadastro
              </Link>

              <button type= "button" className= "operation"  onClick= { handlesDeleteClient } >
                Excluir Cadastro
              </button>
            </div>
                
          </div> 
              
           
          <div className= "title-pet"> 
            <h1>Pets</h1> 
          </div>


          {client.pets ? client.pets.map( (pet) => {
            return  (
              <div key= {pet.id} className= "client-pets-content">
                <div className= "titular-pet">
                  <Link to= {`/pets/${pet.id}`} style= {{textDecoration: 'none'}}>
                    <h3>
                      <span><MdPets size={24} color= "#12406a"/> {pet.name} </span>
                    </h3>
                  </Link>
                </div>
              
                <hr/>
              
                <div className= "client-pet-field">
                  <h2>Raça</h2>
                    <p> {pet.breed} </p>
                </div>
              
              </div>
            )
          }): ''}




          <div className= "operacoes">
            <button type= "button">
              <Link to= {`/create`}  style= {{textDecoration: 'none', color: '#FFFF', fontWeight: 'normal'}}>  Criar Pet </Link>
            </button>
          </div>


          
        </div>
      </main>
    </div>
  )
}

//