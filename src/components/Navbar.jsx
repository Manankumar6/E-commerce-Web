import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { RxCross2 } from "react-icons/rx";
import { useCartContext } from '../context/Cart_context';
import Button from '@mui/material/Button';

const Navbar = () => {
  const {user, loginWithRedirect ,isAuthenticated,logout } = useAuth0();
  const [cross,setCross] = useState(false)
  const {total_item} = useCartContext()
  const toggleCross = ()=>{
    setCross((cross)=>{
      return !cross
    })
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{background:"#003049"}}>
        <div className="container-fluid " >
          <NavLink className="navbar-brand  " to="/">E-commerce Web</NavLink>
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
              {
                isAuthenticated&& 
                <li className='nav-item'>
                   <NavLink className="nav-link active" to="#">  {user.name}</NavLink>
                
                  </li>
              }

              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/cart">  <ShoppingCartRoundedIcon /> <span className="position-absolute top-2 translate-middle badge rounded-pill bg-danger">
                {total_item}
                 
                  </span></NavLink>
              </li>
              {isAuthenticated?

                <li className="nav-item">
              <Button variant="contained" className='text-light' style={{ background: "#c1121f" }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</Button>
              </li>
                :
                <li className="nav-item">
              <Button variant="contained" className='text-dark' style={{ background: "#e4f0d0" }} onClick={() => loginWithRedirect()}>Log in</Button>
              </li>
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
