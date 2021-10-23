import {Link, useHistory} from 'react-router-dom'
import {IoIosArrowRoundBack} from 'react-icons/io'
import '../styles/components/sidebar.css'
import Logo from '../images/vet.png'

const Sidebar = () => {
  const {goBack} =  useHistory()

  return (
    <aside className= "app-sidebar">

      <Link to= "/">
      <img src= {Logo} alt= "logo"/>
      </Link>

      <footer>
        <button type= "button" onClick= {goBack}>
        <IoIosArrowRoundBack size= {40} color="#FFF"/>
        </button>
      </footer>

    </aside>
  )
}

export default Sidebar