import s1 from './Images/s1.jpeg' 
import s2 from './Images/s2.jpeg' 
import s3 from './Images/s3.jpeg' 
import s4 from './Images/s4.jpeg' 
import s5 from './Images/s5.webp' 

const images = [s1, s2, s3, s4, s5] 

const Carousal = () => {
  return (
    <div>
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
         
          <div className="carousel-inner">
            {images.map((img, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img src={img} className="d-block w-100" />
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="bg-icon">
              <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa-solid fa-less-than"></i></span>
            </span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="bg-icon">
              <span className="carousel-control-next-icon" aria-hidden="true"><i className="fa-solid fa-greater-than"></i></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  ) 
}

export default Carousal 
