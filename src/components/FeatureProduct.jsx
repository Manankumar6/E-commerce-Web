import React from 'react'
import { useProductContext } from '../context/Productcontext'
import Product from './Product'

const FeatureProduct = () => {
    const {isLoading,featureProducts} = useProductContext()

    if(isLoading){
        return<>
            Loading....
        </>
    }
  return (
    <div className='container-fluid py-3 my-2'  style={{background:"#f4f7fc"}}>

       
    <div className=" pt-2 ms-5">

            <p className='mb-0'>Check Now !</p>
            <h3>Our Feature Services</h3>
    </div>
            <div className="row">

           {
               featureProducts.map((currEle)=>{
                   return(
                       <Product key={currEle.id}  {...currEle}/>
                       )
                    })
        }
       
                    </div>
    </div>
  )
}

export default FeatureProduct