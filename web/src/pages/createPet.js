import React from "react";
import "../styles/createPet.css"

export default function createPet () {
  return (
    <div id= "page-create-Pet"> 
      
      <main>
        <form onSubmit=""  className= "create-Pet-Form">
        <fieldset>
          <div> Dono do Pet </div>
          <legend>Pet</legend>

            <div className= "input-block">
              <label htmlFor = "name"> Nome </label>
              <input id= "name" value= "{name}" onChange= ""/>
            </div>

            <div className= "input-block">
              <label htmlfor= "age"> Idade </label>
              <input id="age" value="" onChange= ""/>
            </div>

            <div className= "input-block">
              <label htmlFor= "breed"> Raça </label>
              <input id="breed" value= "" onChange= ""/>
            </div>

            <div className= "input-block">
              <label htmlFor= "weight"> Peso </label>
              <input id= "weight" value= "" onChange= ""/>
            </div>

            <div className= "input-block">
              <label htmlFor= "gender"> Selecione o sexo do Pet </label>

              <select id= "gender">
                <option value= "femea"selected > Fêmea </option>
                <option value= "macho"> Macho </option>
              </select>
            
            </div>

            <div className= "input-block">
              <label htmlFor= "images"> Imagens </label>
              
              <div className= "images-container">

                <label htmlFor= "image[]" className= "new-image">
                      icon
                </label>
              </div>
              <input multiple type="file" id= "image[]" value= "" onChange= ""/>
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