import  { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  let [data,setData]=useState({"_id":"","name":"","pwd":"","phno":""})
  let [msg,setMsg]=useState("")
  let navigate=useNavigate()

  let fun=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
 }

 let reg=()=>{
  axios.post("http://localhost:1234/reg",data).then((res)=>{

    if(res.data.msg=="Registration done !")
    {
      navigate("/login")
    }
    else
    {
      setMsg(res.data.msg)
    }
  })
 }
  return (
    <div className='regwrapper'>
      <div className='regsub'>
        <div>{msg}</div>
        <input type='text' placeholder='enter email' name="_id" value={data._id} onChange={fun}/>
        <input type='text' placeholder='enter name' name="name" value={data.name} onChange={fun}/>
        <input type='password' placeholder='enter password' name="pwd" value={data.pwd} onChange={fun}/>
        <input type='text' placeholder='enter phno' name="phno" value={data.phno} onChange={fun}/>
        <button onClick={reg}>Register</button>
      </div> 

    </div>
  )
}

export default Register