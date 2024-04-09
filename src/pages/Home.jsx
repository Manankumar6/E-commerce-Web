import React from 'react'
import Hero from '../components/Hero'

import FeatureProduct from '../components/FeatureProduct'
import Carousel from '../components/Carousel'




const Home = () => {
 
  const myData = {
    name:"E-Shopify Store",
    offer:"SALE UP TO 60%",
    trand:"FASHION",
    para:"Discover a world of endless possibilities with	E-Shopify. Shop the latest trends, must-have essentials, and everything in between, all from the comfort of your home.",
    image:"images/home.jpg"
  }


  return (
    <div >
    
    <Hero myData={myData}/>
    <FeatureProduct/>
    <Carousel/>
    </div >
  )
}

export default Home
