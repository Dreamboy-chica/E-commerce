import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import Carousal from './Carousal'
import Sliderhome from './Sliderhome'
import Subnav from './Subnav'

const Home = () => {

  let [data,setData]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:1234/getprod").then((res)=>{
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
    axios.post("http://localhost:1234/addcart",cartprod).then(()=>{
      navigate("/cart")
    })
  }
  }
  return (
    <div>

    <Carousal/>
    <Sliderhome/>
    <Subnav/>

    <div className='back'>   
    <div className='alldata'>
      {
        data.map((item)=>{
          return(
          <div className='cardd' key={item._id}>
        
            <img src={`http://localhost:1234/Prodimg/${item.pimg}`} className='card-img-top'/>
            <div className='ctext'>
            <h5 className='name'>{item.name}</h5>
            <p className='desc'>{item.desc}</p>
            <p className='price'>₹{item.price}</p>

            <button className='cart' onClick={()=>addcart(item)}>Add Cart</button>

            </div>
          </div>)
        })
      }

    </div>
    </div>
    </div>
    
  )
}

export default Home