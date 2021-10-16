import Sidebar from "../components/sidebar.js"
import "../styles/owners.css";

import {FiUser} from 'react-icons/fi'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";




export default function Owners () {


  
  return (
    <div id= "page-Owners">
      <Sidebar/>
      <main>
        <div className= "owners-details">
         
          <div className= "title-clients"> 
            <h1>Lista de Clientes</h1> 
          </div>
      
          <div className= "owners-details-content">
            <div className= "titular">
              
              <h3> <span><FiUser size={24} color= "#12406a"/> Jean Oliveira Fraga</span></h3>
            </div>
          
            <hr/>

            <div className= "owners-details-field">
              <h2>Phone Number</h2>
              <p>22 998702012</p>
            </div>

            <div className= "owners-details-field">
              <h2>Email</h2>
              <p>jean@jean.com</p>
            </div>

          </div> 

          
          

          
        </div>
      </main>
    </div>
  )
}




