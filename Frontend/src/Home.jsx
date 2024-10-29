import { useContext, useEffect, useState } from 'react' 
import axios from 'axios' 
import Ct from './Ct' 
import { useNavigate } from 'react-router-dom' 
import Carousal from './Carousal' 
import Sliderhome from './Sliderhome' 
import Subnav from './Subnav' 

const Home = () => {
  const [data, setData] = useState([]) 
  const [currentPage, setCurrentPage] = useState(1) 
  const [itemsPerPage] = useState(8)  // You can adjust this value
  const obj = useContext(Ct) 
  const navigate = useNavigate() 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:1234/getprod") 
        setData(res.data) 
      } catch (error) {
        console.error("Error fetching data:", error) 
      }
    } 

    fetchData() 
  }, []) 

  const addcart = (item) => {
    if (obj.store.token === "") {
      navigate("/login") 
    } else {
      const cartprod = {
        uid: obj.store._id,
        pid: item._id,
        name: item.name,
        price: item.price,
        pimg: item.pimg,
        qty: 1,
      } 
      axios.post("http://localhost:1234/addcart", cartprod)
        .then(() => {
          navigate("/cart") 
        })
        .catch((error) => {
          console.error("Error adding to cart:", error) 
        }) 
    }
  } 

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage 
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem) 
  const totalPages = Math.ceil(data.length / itemsPerPage) 

  return (
    <div>
      <Carousal />
      <Sliderhome />
      <Subnav />

      <div className='back'>
        <div className='alldata'>
          {currentItems.map((item) => {
            const showMsg = item.price > 1300 
            const showDecorMsg = item.cat === "decor" 

            return (
              <div className='cardd' key={item._id}>
                <img
                  src={`http://localhost:1234/Prodimg/${item.pimg}`}
                  className='card-img-top'
                  alt={item.name}
                />
                <div className='ctext'>
                  <h5 className='name'>{item.name}</h5>
                  <p className='desc'>{item.desc}</p>
                  <p className='price'>₹{item.price}</p>

                  {showMsg && (
                    <p className='special-message'>
                      <span className='diwali'>Great Indian Festival</span>
                    </p>
                  )}
                  {showDecorMsg && <p className='text-danger'>Save 30%!</p>}

                  <button className='cart' onClick={() => addcart(item)}>Add Cart</button>
                </div>
              </div>
            ) 
          })}
        </div>

    
        <div className='pagination'>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  ) 
} 

export default Home 
