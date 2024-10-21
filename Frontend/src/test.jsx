// import axios from 'axios'
// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Ct from './Ct'

// const Addprod = () => {
//   let [data,setData]=useState({"name":"","price":"","desc":"","cat":"","pimg":""})
//   let obj=useContext(Ct)

//   useEffect(()=>{
//     if(obj.store.role!="admin")
//     {
//       navigate("/login")
//     }

//   },[])
//   let navigate=useNavigate()
//   let fun=(e)=>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   let fun1=(e)=>{
//     setData({...data,"pimg":e.target.files[0]})
//   }
//   let addprod=()=>{
//     let fd=new FormData()
//     for(let p in data)
//     {
//       fd.append(p,data[p])
//     }
//     axios.post("http://localhost:5000/add",fd).then(()=>{
//       navigate("/")

//     })

//   }
//   return (
//     <div className='formcon'>
//       <div className='form'>
//         <input type='text' placeholder='Enter title' name="name" value={data.name} onChange={fun}/>
//         <input type='text' placeholder='Enter desc' name="desc" value={data.desc} onChange={fun}/>
//         <input type='text' placeholder='Enter price' name="price" value={data.price} onChange={fun}/>
//         <input type='text' placeholder='Enter cat' name="cat" value={data.cat} onChange={fun}/>
//         <input type='file' onChange={fun1}/>
//         <button onClick={addprod}>Addprod</button>

//       </div>
//     </div>
//   )
// }

// export default Addprod