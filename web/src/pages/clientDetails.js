import Sidebar from "../components/sidebar.js"
import "../styles/pages/clientDetails.css";

import {FiUser} from 'react-icons/fi'
import {MdPets} from 'react-icons/md'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"
//import Clients from "./clients.js";




export default function ClientDetails () {

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

  return (
    <div id= "page-Client-Details">
      <Sidebar/>
      <main>
        <div className= "client-details">
      
          <div key= {""} className= "client-details-content">

            <div className= "titular"> 
              <h3>
                <span><FiUser size={24} color= "#12406a"/> {client.name} </span>
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
    
          </div> 
              
           
          <div className= "title-pet"> 
            <h1>Pets</h1> 
          </div>


          {client.pets ? client.pets.map( (pet) => {
            return  (
              <div key= {pet.id} className= "client-pets-content">
                <div className= "titular-pet">
                  <Link to= '' style= {{textDecoration: 'none'}}>
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
              <Link to= {`/clients/${clientId}/pets`}  style= {{textDecoration: 'none', color: '#FFFF', fontWeight: 'normal'}}>  Criar Pet </Link>
            </button>
          </div>

          
        </div>
      </main>
    </div>
  )
}

//