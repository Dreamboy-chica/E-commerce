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

    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card">
    <div className="card-body">

      <h2 className="py-3">Register</h2>
      
      <div className='msg text-danger my-3'>{msg}</div>
     
    <div className="mb-2">
    <input type='text' className="form-control" placeholder='Enter Email' name="_id" value={data._id} onChange={fun}/>
    </div>        
    
    <div className="mb-2">
    <input type='text' className="form-control" placeholder='Enter Name' name="name" value={data.name} onChange={fun}/>
    </div>        
    

    <div className="mb-2">
    <input type='password' className="form-control" placeholder='Enter Password' name="pwd" value={data.pwd} onChange={fun}/>
    </div>   

    <div className="mb-2">
    <input type='text' className="form-control"  placeholder='Enter Phno' name="phno" value={data.phno} onChange={fun}/>
    </div>        

    <button type="submit" className="btn" >
    <span onClick={reg}>Register</span>
     </button>      
     
     </div> 
    </div>
    </div>

  )
}

export default Register