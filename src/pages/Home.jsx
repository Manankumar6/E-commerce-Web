import React from 'react'
import Hero from '../components/Hero'
import Services from './Services'
import Trusted from '../components/Trusted'
import FeatureProduct from '../components/FeatureProduct'




const Home = () => {
 
  const myData = {
    name:"E-Commerce Web"
  }


  return (
    <div >
    
    <Hero myData={myData}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </div >
  )
}

export default Home
