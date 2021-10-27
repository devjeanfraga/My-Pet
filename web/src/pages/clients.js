import Sidebar from "../components/sidebar.js"
import "../styles/pages/clients.css";

import {FiUser} from 'react-icons/fi'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";


import {Link} from "react-router-dom"





export default function Clients () {
 
 // const {url, path}= useRouteMatch()


  const Clients =   {
    id: Number(),
    name: String(),
   
  }

const [clients, setClients] =  useState([Clients])
const [restoreClient, setRestoreClient] = useState('')





useEffect(() => {
    api.get('/clients').then(res => {
      setClients(res.data)
      console.log(res.data)
    })
}, [])


  async function handleRestore () {
    if(!restoreClient) {
      return  window.alert("Id não encontrado")
    } else {
      await api.post(`/clients/${restoreClient}/restore`)
      window.alert("Cadastro restaurado com Sucesso")
      window.location.reload()
    }

  }
  
  return (
    <div id= "page-Owners">
      <Sidebar/>
      <main>
        <div className= "owners-details">
         
          <div className= "title-clients"> 
            <h1>Lista de Clientes</h1> 
          </div>
      
          {clients.length === 0  ? '' : clients.map( (client)=> {
              return (
                <div key= {client.id} className= "owners-details-content">
                <div className= "titular">
                  
                  <Link to= {`/clients/${client.id}`}  style={{ textDecoration: 'none' }} >
                    <h3>
                      <span><FiUser size={24} color= "#12406a"/> {client.name} </span>
                    </h3>
                  </Link>

                </div>
              
                <hr/>
              </div> 
              )
            })}     
   

            <div className= "restore-client-Form">
             
                  <h2>Restaurar Cadastro</h2>
                  <div className= "input-block">
                    <label>Por gentileza, digite o ID do cliente</label>
                    <input id= "clientId" name= "clientId" value= {restoreClient} onChange= {(e)=> {setRestoreClient(e.target.value)}}/>
                  </div>
               
                <button type= "submit" className= "confirm-button" onClick= {handleRestore}>
                  Restaurar 
                </button>
             
            </div>


        </div>


      </main>
    </div>


  )
}




