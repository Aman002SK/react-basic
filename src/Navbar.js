import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">
       <div className="image">
       <img
          src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="img"
        />
       </div>
        <div className="head-links">
          <ul className="navbar">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
