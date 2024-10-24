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

    <div className="d-flex justify-content-center align-items-center vh-100">

    <div className="card">
    <div className="card-body">

      <div className='msg text-danger my-3'>{msg}</div>



    <div className="mb-2">
    <input type='text' className="form-control" placeholder='Enter Email' name="_id" value={data._id} onChange={fun}/>
    </div>   

    <div className="mb-2">
    <input type='password' className="form-control" placeholder='Enter Password' name="pwd" value={data.pwd} onChange={fun}/>
    </div>         
    
    
    <button type="submit" className="btn" >
    <span onClick={login}>Login</span>
    </button>   

      </div> 
      </div>
    </div>
  )
}

export default Register