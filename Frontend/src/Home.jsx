import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  let [data,setData]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:5000/getprod").then((res)=>{
setData(res.data)
    })


  },[])
  let addcart=(item)=>{
    if(obj.store.token=="")
    {
      navigate("/login")
    }
    else{
    let cartprod={"uid":obj.store._id,"pid":item._id,"name":item.name,"price":item.price,"pimg":item.pimg,"qty":1}
    axios.post("http://localhost:5000/addcart",cartprod).then(()=>{
      navigate("/cart")
    })
  }
  }
  return (
    <div className='cardcon'>
      {
        data.map((item)=>{
          return(<div className='card' key={item._id}>
            <img src={`http://localhost:5000/prodimgs/${item.pimg}`} className='card-img-top'/>
            <div className='card-body'>
            <h5 className="card-title">{item.name}</h5>
           
            <p className='card-text'>Price:{item.price}</p>
           
            <button onClick={()=>addcart(item)}>Addcart</button>
            <button>Know more...</button>
              </div>
            </div>)
        })
      }

    </div>
  )
}

export default Home