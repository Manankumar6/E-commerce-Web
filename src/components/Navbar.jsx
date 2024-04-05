import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [cross,setCross] = useState(false)
  const toggleCross = ()=>{
    setCross((cross)=>{
      return !cross
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{background:"#003049"}}>
        <div className="container-fluid " >
          <NavLink className="navbar-brand  " to="/">Navbar</NavLink>
          <button onClick={toggleCross} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            {cross?<RxCross2 className='fs-2 text-danger' />: <span className="navbar-toggler-icon "></span>
        }
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav  text-center ms-md-auto ">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/contact">  <ShoppingCartRoundedIcon /> <span className="position-absolute top-2 translate-middle badge rounded-pill bg-danger">
                 1
                 
                  </span></NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
