import Sidebar from "../components/sidebar.js"
import "../styles/clients.css";

import {FiUser} from 'react-icons/fi'
import api from "../services/api.js";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"




export default function ClientDetails () {

  return (
    <div id= "page-Clients-Details">
      <Sidebar/>
      <main>
        <div className= "owners-details">
         

      
         
                <div key= {""} className= "owners-details-content">
                 <div className= "titular">
                  
                  <h3>
                    <span><FiUser size={24} color= "#12406a"/> {""} </span>
                  </h3>

                  <div className= "owners-details-field">
                    <h2>Phone</h2>
                    <p>{""}</p>
                  </div>

                  <div className= "owners-details-field">
                    <h2>Email</h2>
                    <p>{""}</p>
                  </div>

                </div>
              
                <hr/>
    
              </div> 
              
           
              <div className= "title-pet"> 
                <h1>Pets</h1> 
              </div>



          
        </div>
      </main>
    </div>
  )
}