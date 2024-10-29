import { useEffect, useState,useContext } from "react" 
import axios from 'axios' 
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Food = () => {
  const [data, setData] = useState([]) 
  let obj=useContext(Ct)
  let navigate=useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1234/getfoodprod")
        setData(res.data) 
      } catch (error) {
        console.error("Error fetching data:", error) 
      }
    } 

    fetchData() 
  }, []) 

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
    <div className='back'>
      <div className='alldata'>
        {data.map((item) => (
          <div className='cardd' key={item.id}>
            <img src={`http://localhost:1234/Prodimg/${item.pimg}`} className='card-img-top' alt={item.name} />
            <div className='ctext'>
              <h5 className='name'>{item.name}</h5>
              <p className='desc'>{item.desc}</p>
              <p className='price'>₹{item.price}</p>
              <button className='cart' onClick={()=>addcart(item)}>Add Cart</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  ) 
} 

export default Food
