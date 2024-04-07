import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
const Hero = ({myData}) => {
    const {name} = myData

  return (
    <div className='mt-5'>
     
    <div className="container ">
      <div className="row text-center text-md-start ">
        <div className="col-md-6 my-auto text-center text-md-start ">
          <p>Welcome To</p>
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel maxime ullam beatae, quaerat iusto quisquam ratione ipsa, perferendis dolore accusamus deserunt? Expedita maiores debitis id laborum officia? Pariatur, perspiciatis?
          </p>
          <NavLink to='/product'>

          <Button variant="contained" className='text-light fw-bold' style={{ background: "#c1121f" }}>Shop Now</Button>
          </NavLink>
        </div>
        <div className=" col-md-6 ">

          <img
            src="images/home.jpg"
            className='img-fluid mt-5'
            alt="heroimage"
            style={{ width: "80%" }}
          />
        </div>

      </div>
    </div>


  </div>
  )
}

export default Hero
