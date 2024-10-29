import { Link } from "react-router-dom"

const Subnav = () => {
  return (
    <div>
   <div className="middle-text">
      <div className="line" />
      <span className="text-danger">Category Finder</span>
      <div className="line" />
    </div> 

    <div className="subnav">
            <ul>

                <div to='/' className="activee">All</div>
                <Link  to='/clothing' className="heffect">Clothing</Link>
                <Link  to='/electronics'        className="heffect">Electronics</Link>
                <Link  to='/beauty'  className="heffect">Beauty</Link>
                <Link   to='/books'  className="heffect">Books</Link>
                <Link   to='/decoration'  className="heffect">Decoration</Link>
                <Link  to='/food'  className="heffect">Food</Link>

            </ul>
        </div>
      
    </div>
  );
}

export default Subnav;
