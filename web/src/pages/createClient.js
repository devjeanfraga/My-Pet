import React, {useState} from 'react'
import '../styles/pages/createClient.css'
import Sidebar from '../components/sidebar'
import api from '../services/api'
import {useHistory} from 'react-router-dom'


export default function CreateClient () {

    const history = useHistory()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData();
   
      data.append('name', name);
      data.append('phone', String(phone));
      data.append('email','jean@gmail.com');
     
    
    
  
      console.log(data)
      await api.post('/clients/', data)
      alert('Cadastro efetuado com sucesso');
  
  
      //history.push('/clients')
  }

  return (
    <div id= "page-Create-Client"> 
      
      <Sidebar/>
      <main>
        <form onSubmit= {handleSubmit}  className= "create-client-Form">
        <fieldset>
         
          <legend>Cadastro do Cliente</legend>

            <div className= "input-block">
              <label htmlFor = "name"> Nome </label>
              <input id= "name" value= {name} onChange= {(e) => {setName(e.target.value)}} />
            </div>

            <div className= "input-block">
              <label htmlFor= "phone"> Telefone </label>
              <input id="phone" value= {phone} onChange= {(e) => {setPhone(e.target.value)}} />
            </div>

            <div className= "input-block">
              <label htmlFor= "email"> E-mail </label>
              <input id="email" value= {email}   onChange= {(e)=> {setEmail(e.target.value)}} />
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
