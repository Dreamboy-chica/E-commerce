import { useContext } from 'react'
import { Link } from "react-router-dom"
import './App.css'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)

  return (
    <div>

    <div className="navwrapper"> 
        <div>
        <div><i className="fa-brands fa-pied-piper-alt"></i></div> 
        <div ><input className="search" placeholder="Search for products"/></div>
        </div>
      
    <div className="home">
       <Link to='/'>Home</Link>

       {obj.store.token==""&& <Link to='/reg'>Register</Link>}

       {obj.store.token==""&& <Link to='/login'><i className="fas fa-user px-2"></i>Login</Link>}

       {obj.store.token!=""&&  <Link to='/logout'>Logout</Link>}
       {obj.store.role=="admin"&& <Link to="/addprod">AddProd</Link>}

       {obj.store.token!=""&&  <Link to='/cart'><i className="fa-solid fa-cart-shopping px-2"></i>Cart</Link>}
       {obj.store.token && (
  <div>
    {obj.store.name.split(' ')[0][0].toUpperCase() + obj.store.name.split(' ')[0].slice(1).toLowerCase()} {obj.store.name.split(' ').pop()[0].toUpperCase()}
  </div>
)}



    </div>
      
    </div>
    </div>




  )
}

export default Nav
