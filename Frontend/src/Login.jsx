import  { useContext, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()

  let obj=useContext(Ct)

  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }
 

 let login=()=>{
  axios.post("http://localhost:1234/login",data).then((res)=>{

    if(res.data.token==undefined) //checking if token is not exists
    {
      setMsg(res.data.msg)
    }
    else
    {                         //if token exists navigate to home page()taken is available in store
      obj.storeupd(res.data)
      navigate("/")

    }

  })
}
  return (
    <div className='regwrapper'>
      <div className='regsub'>
        <div>{msg}</div>
        <input type='text' placeholder='Enter Your Email-id' name="_id" value={data._id} onChange={fun}/>
        <input type='password' placeholder='Enter Your Password' name="pwd" value={data.pwd} onChange={fun}/>
        <button onClick={login}>Login</button>
      </div> 

    </div>
  )
}

export default Register