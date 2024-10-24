import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './Home'
import Ct from './Ct'
import Register from './Register'
import Nav from './Nav'
import Logout from './Logout'
import Cart from './Cart'
import Login from './Login'
import { useState } from 'react'
import Addprod from './Addprod'


const App = () => {

  let [store,setStore]=useState({"token":"","_id":"","name":"","role":""})
  let storeupd=(obj)=>{
    setStore({...store,...obj})
  }
  let obj={"store":store,"storeupd":storeupd}

  return (
    <div>

      <BrowserRouter>
      <Ct.Provider value={obj}> 
      <Nav/>

      <Routes>

        <Route path='/'  element={<Home/>} />
        <Route path='/reg'  element={<Register/>} />
        <Route path='/login'  element={<Login/>} />
        <Route path='/logout'  element={<Logout/>} />
        <Route path='/cart'  element={<Cart/>} />
        <Route path='/addprod' element={<Addprod/>}/>
      

      </Routes>
      </Ct.Provider>

      </BrowserRouter>
    </div>
  )
}
export default App
