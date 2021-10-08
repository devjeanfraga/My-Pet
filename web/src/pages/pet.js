import Sidebar from "../components/sidebar.js"
import "../styles/pet.css";
import picturePet from '../images/ivosk.jpg'

export default function pet () {
  return (
    <div id= "page-Pet">
      <Sidebar/>
      <main>
        <div className= "pet-details">

          <div id= "images-wrapper">
            <div className= "images">  
              <div className= "item-image"> <img src= {picturePet} alt= "pet"/> </div>
              <div className= "item-image"> <img src= {picturePet} alt= "pet"/> </div>
              <div className= "item-image"> <img src= {picturePet} alt= "pet"/> </div>
              <div className= "item-image"> <img src= {picturePet} alt= "pet"/> </div>
              <div className= "item-image"> <img src= {picturePet} alt= "pet"/> </div>
              <div className= "item-image"> <img src= {picturePet} alt= "pet"/> </div>

            </div>
          </div>

          <div className= "pet-details-content">
            <h1>Ivoski</h1>
            <h3>Responsável : Jean Fraga</h3>
            <hr/>

            <div className= "pet-details-field">
              <h2>Idade</h2>
              <p> 2 Anos</p>
            </div>

            <div className= "pet-details-field">
              <h2>Raça</h2>
              <p> Shar Pei</p>
            </div>

            <div className= "pet-details-field">
              <h2>Peso</h2>
              <p>27kg</p>
            </div>

            <div className= "pet-details-field">
              <h2>Sexo</h2>
              <p>Fêmea</p>
            </div>
            
            <button type= "button" className= "contact-button">
                Contactar o dono por Whatsapp 
            </button>
            
          </div>
        </div>
      </main>
    </div>
  )
}