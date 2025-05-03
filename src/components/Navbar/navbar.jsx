import '../Navbar/navbar.css' ; 
//import { useState } from 'react';
import shape1 from "../../assets/icons/shape-14.svg" ; 

// const [isOpen, setIsOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsOpen(!isOpen);
//     };


export default function navbar() {


  
  return (
    <>
      <nav className='container_l'>
        <div className="left-nav">
            <img src={shape1} alt="shape" />
            Littel Learners
        </div>
        {/* <button className="toggle-button" onClick={toggleNavbar}>
                {isOpen ? 'Close' : 'Menu'}
            </button> */}
        <ul 
       
        >
            <li className='spe-l'> <a href="#">Home </a> </li>
            <li> <a href="#">About Us </a></li>
            <li> <a href="#">Academics </a></li>
            <li> <a href="#">Admissions </a></li>
            <li> <a href="#"> Student Life</a></li>
            <li className='spe-r'> <a href="#">Contact </a></li>
        </ul>
      </nav>
    </>
  )
}
