import Sidebar from "../components/sidebar.js"
import "../styles/pages/clients.css";

import {FiUser} from 'react-icons/fi'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";


import {Link, useRouteMatch, Route, useParams} from "react-router-dom"





export default function Clients () {
  const {clientId} = useParams()
  const {url, path}= useRouteMatch()


  const Clients =   {
    id: Number(),
    name: String(),
   
  }

const [clients, setClients] =  useState([Clients])





useEffect(() => {
    api.get('/clients').then(res => {
      setClients(res.data)
      console.log(res.data)
    })
}, [])
  
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
   
        </div>
      </main>
    </div>


  )
}




