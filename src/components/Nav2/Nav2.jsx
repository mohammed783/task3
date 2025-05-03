import { useState } from "react";
import "../Nav2/Nav2.css";
import logo from "../../assets/icons/shape-14.svg" ; 

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile); 
  };

  return (
    <nav className="navbar  container_l">
      <div className="logo">
        <img src={logo}alt="logo" />
        Little Learners</div>
      <ul className={`nav-links ${isMobile ? "active" : ""}`}>
        <li className='spe-l'>Home</li>
        <li>About Us</li>
        <li>Academics</li>
        <li>Admissions</li>
        <li>Student Life</li>
        <li className="spe-r">Contact</li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
}
