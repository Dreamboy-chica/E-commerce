import axios from 'axios'
import  { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Addprod = () => {

  let [data,setData]=useState({"name":"","price":"","desc":"","cat":"","body":"","pimg":""})

  let obj=useContext(Ct)
  useEffect(()=>{
    if(obj.store.role!="admin")
    {
      navigate("/login")
    }

  },[])

  let navigate=useNavigate()
  //this is for the form-data field like name,price,descrption
  let fundata=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  //for adding the files/img
  let funimg=(e)=>{
    setData({...data,"pimg":e.target.files[0]})
  }

  let addprod=()=>{
    let fd=new FormData()
    for(let p in data)
    {
      fd.append(p,data[p])
    }
    axios.post("http://localhost:1234/addprod",fd).then(()=>{
      navigate("/")
    })
  }
  return (
    <div className='formcon'>
      <div className='form'>

        <input type='text' placeholder='Enter Title' name="name" value={data.name} onChange={fundata}/>
        <input type='text' placeholder='Enter desc' name="desc" value={data.desc} onChange={fundata}/>
        <input type='text' placeholder='Enter Price' name="price" value={data.price} onChange={fundata}/>

        <select onChange={fundata} value={data.cat} name="cat" className='cat'>    
        <option selected disabled value="">Select Category</option>
        <option value="Women">Women</option>    
        <option value="Men">Men</option>
        <option value="Kids">Kids</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Beauty">Beauty</option>
        <option value="Food">Food</option>
        <option value="others">Others</option>
        </select>

       <textarea value={data.body} onChange={fundata} name='body' placeholder='Type here...' className='body'>
       </textarea>

        <input type='file' onChange={funimg}/>
        <button onClick={addprod}>AddProd</button>

      </div>
    </div>
  )
}

export default Addprod