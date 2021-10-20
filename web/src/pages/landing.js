
import React from "react";
import '../styles/pages/landing.css'
import {MdPets} from 'react-icons/md'
import {Link} from 'react-router-dom'


export default function Landing  () {


  return (
  <div id= "page-Landing">

    <div>
      <main>
        <h1>
         <span> My Pet <MdPets size= {70}  color= "#FFFF"/></span>
        </h1>
        <p>Aplicação de serviços para clínicas veterinárias</p>
      </main>

      <div className= "operacoes">
        
        <button type= "button">
          <Link to= {"/clients"} style= {{textDecoration:'none', color: '#FFFF' }}>
            <span> Clientes </span>
          </Link>
        </button>
       

    
        <button type= "button">
          <Link to= "/client-create" style= {{textDecoration:'none', color: '#FFFF' }}>
            <span> Cadastrar Cliente </span>
          </Link>    
        </button>
      
      </div>                    

    </div>

  </div>

  )
}
 