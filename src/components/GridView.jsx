import React from 'react'
import Product from './Product'

const GridView = ({products}) => {

  return (
    <div className="my-4">

    <div className='row'>
        {products.map((currEle)=>{
            return(
                <Product key={currEle.id} {...currEle}/>
                )
        })}
        
    </div>
                </div>
  )
}

export default GridView
