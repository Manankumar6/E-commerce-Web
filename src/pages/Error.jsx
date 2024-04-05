import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <div className='container text-center pt-5'>
        <h1>404</h1>
        <h3>UH OH! You're lost.</h3>
        <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button blow to go back to the homapage. </p>
        <NavLink to="/">
            <Button variant="contained" className='text-light fw-light  mt-2' style={{ background: "#274c77" , }}>Get Started</Button>
            </NavLink>
      
    </div>
  )
}

export default Error
