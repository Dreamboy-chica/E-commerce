import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  let [data,setData]=useState([])  //getting all the cartdata

  let [tnfcart,Settnfcart]=useState(0)

  let [f,setF]=useState(true) //triggering this for dec/inc
  let obj=useContext(Ct)
  let navigate=useNavigate()

  useEffect(()=>{
    if(obj.store.token=="")
    {
      navigate("/login")
    }
    else
    { //id means the user-id(_id is stored inside the token not the uid)
    axios.get(`http://localhost:1234/getcart/${obj.store._id}`).then((res)=>{

      setData(res.data)
      let sum=0
      for(let i in res.data)
      {
        sum=sum+res.data[i].price*res.data[i].qty
      }
      Settnfcart(sum)
      obj.storeupd({"ct":res.data.length}) //setting the total no.of cart into the store
    })
    }
  },[f])

  let inc=(cid,qty)=>{
    if(qty<5)
    {
      axios.get(`http://localhost:1234/inc/${cid}`).then(()=>{
        setF(!f)
      })
    }
  }
  let del=(cid)=>{
    axios.delete(`http://localhost:1234/delcart/${cid}`).then(()=>{
      setF(!f)
    })
  }

  let dec=(cid,qty)=>
  {
    if(qty==1)
    {
      del(cid)
    }
    else{
      axios.get(`http://localhost:1234/dec/${cid}`).then(()=>{
        setF(!f)
      })
    }
  }

  return (<>
  {data.length==0&&<div>Cart is Empty</div>}

  <div className='topcart'> 

  <div> 
  
  {data.length!=0&&<div className='disallcart'>
      {
        data.map((item)=>{
          return(
          <div key={item._id}>
          <div className='subcart' >
            <img src={`http://localhost:1234/Prodimg/${item.pimg}`} className='card-img-top'/>
            <div className='card-body mx-5'>
            <h5 className="card-title">{item.name}</h5>
           
            <p className='card-text'>Price: ₹ {item.price} per piece</p>
            <p className='card-text'>{item.desc}</p>

            <div className='incdec'>
              <button onClick={()=>dec(item._id,item.qty)} >-</button>
              <span>{item.qty} </span>
              <button onClick={()=>{inc(item._id,item.qty)}}>+</button>
            </div> 
              <p className='card-text my-2'>Amount : ₹  {item.price*item.qty}</p>
                {/* here _id means card-id */}
              <button onClick={()=>del(item._id)} className='del'><i className="fa-regular fa-trash-can"></i></button> 
              </div>
          </div>
          </div>
        )
        })
      }
    </div>
    }
 </div>

    <div className='tamount'> 
   
    {data.length>0&&<div className='text-success'><strong>Total Amount :</strong><strong className='text-danger'> ₹ {tnfcart}</strong></div>}
   
    <div className='checkout'>
      <button> Checkout</button>
    </div>
    </div>
</div>  
  </>
  )
}

export default Cart