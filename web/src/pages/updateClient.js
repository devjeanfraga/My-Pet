import React, {useState} from 'react';
import '../styles/components/create_or_update.css';
import Sidebar from '../components/sidebar';
import api from '../services/api';
import {useHistory} from 'react-router-dom';


export default function UpdateClient () {

    const history = useHistory()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    
    async function handleSubmit(event) {
      event.preventDefault();
      
      const data =  {
        name: name,
        phone: String(phone),
        email: email
      }

      let clientId = localStorage.getItem('clientId')
      if(!clientId) {
        return
      }
      clientId = JSON.parse(clientId)
       await api.put(`/clients/${clientId}`, data)
      
      console.log(data)
      alert('Cadastro Atualizado com sucesso');
  
  
     history.push(`/clients/${clientId}`)
  }

  return (
    <div id= "page-Create-Client"> 
      
      <Sidebar/>
      <main>
        <form onSubmit= {handleSubmit}   className= "create-client-Form">
        <fieldset>
         
          <legend>Atualizar Cliente</legend>

            <div className= "input-block">
              <label htmlFor = "name"> Nome </label>
              <input id= "name" name = 'name' value= {name} onChange= {(e) => {setName(e.target.value)}} />
            </div>

            <div className= "input-block">
              <label htmlFor= "phone"> Telefone </label>
              <input id="phone" name = 'phone' value= {phone} onChange= {(e) => {setPhone(e.target.value)}} />
            </div>

            <div className= "input-block">
              <label htmlFor= "email"> E-mail </label>
              <input id="email" name = 'email' value= {email}   onChange= {(e)=> {setEmail(e.target.value)}} />
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
