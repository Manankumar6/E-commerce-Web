import React from 'react'
import Hero from '../components/Hero'
import Button from '@mui/material/Button';
import { FaPhoneAlt } from "react-icons/fa";
import FeatureProduct from '../components/FeatureProduct';
import { NavLink } from 'react-router-dom';
import Trusted from '../components/Trusted';
import Services from './Services';


const About = () => {

  const myData = {
    name: "E-Shopify Store About",
    para: "Minimalin E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide. Established in 2001, our company has rapidly grown to become a prominent player in the eCommerce industry. Our mission is to provide customers with a seamless and convenient shopping experience while offering a diverse selection of high-quality products.",
    image: "images/about.jpg"
  }
  return (
    <div>

      <Hero myData={myData} />
      <div className="container text-center my-5">
        <FeatureProduct />
      </div>
      <Services />
      <Trusted />
      <div className=" text-center my-5">
      <h1 >For furthermore help, contact with our support team.</h1>
      <NavLink to='/contact'>

        <Button variant="contained" className='text-light fw-bold mt-2' style={{ background: "#274c77" }}>Contact us</Button>
      </NavLink>
      <div className='fs-4 mt-3 fw-bold'>
        <FaPhoneAlt /> <span >+91 6398401607</span>
      </div>
      </div>
    </div>
  )
}

export default About
