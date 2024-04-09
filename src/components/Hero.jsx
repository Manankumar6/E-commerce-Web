import React from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
const Hero = ({ myData }) => {
  const { name ,offer,trand,para,image} = myData
  const date = new Date().getFullYear()


  return (
    <div className='my-5'>

      <div className="container ">
        <div className="row text-center text-md-start ">
          <div className="col-md-6 my-auto text-center text-md-start ">
            <p className='m-0'>Welcome To</p>
            <h1 style={{color:"#003049"}}>{name}</h1>
           {offer && <p> {offer}</p>}
            {trand&&<h3>{trand}
              <br />  TRENDS  {date}</h3>}
              <p>{para}</p>
            <NavLink to='/product'>

              <Button variant="contained" className='text-light fw-bold' style={{ background: "#c1121f" }}>Shop Now</Button>
            </NavLink>
          </div>
          <div className=" col-md-6 ">

            <img
              src={image}
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
