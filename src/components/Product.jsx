import React from 'react'
import { NavLink } from 'react-router-dom'
import PriceFormat from '../helper/PriceFormat'
import { useProductContext } from '../context/Productcontext'

const Product = (currEle) => {
   const {capitalize} = useProductContext()
    const { id, image, price, category, name } = currEle

    return (
        <div className="col-md-4 d-flex justify-content-center">

            <NavLink className='nav-link' to={`/singleproduct/${id}`}>

                <div className="card " style={{ width: "18rem" }}>
                    <div className="card-anime">

                        <span className="badge rounded-pill text-bg-danger bg-danger position-absolute end-0 mt-2 me-1">{category}</span>
                        <img src={image} className="card-img-top" alt="productimage" />
                    </div>


                    <div className="card-body d-flex justify-content-between  text-dark" >
                        <h5 className="card-title">{capitalize(name)}</h5>
                        <p className="card-text" style={{color:"#003049"}}>{<PriceFormat price={price}/>}</p>

                    </div>
                </div>

            </NavLink>
        </div>
    )
}

export default Product
