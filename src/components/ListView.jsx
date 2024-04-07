import React from 'react'
import { NavLink } from 'react-router-dom'
import PriceFormat from '../helper/PriceFormat'
import Button from '@mui/material/Button';
import { useProductContext } from '../context/Productcontext';
const ListView = ({ products }) => {
    const {capitalize} = useProductContext()
    return (
        <div className='row my-4' >
            {
                products.map((currEle, ind) => {
                    const { id, image, price, name, description } = currEle
                    return (

                        <div className="row  p-3 border border-1" key={ind}>
                            <div className="col-md-4 col-12 d-flex align-items-center">
                                <div className=" card-anime">

                                    <img className="card-img-top" src={image} alt={name} />
                                </div>
                            </div>
                            <div className="col-md-8 col-12 text-dark">
                                <h5 className="card-title">{capitalize(name)}</h5>
                                <p className="card-text m-0" style={{ color: "#003049" }}>{<PriceFormat price={price} />}</p>
                                <p className='m-0'>{description.slice(0, 99)}...</p>
                                <NavLink className='nav-link p-0 py-2' to={`/singleproduct/${id}`}>
                                    <Button variant="contained" className='text-light fw-light ' style={{ background: "#274c77", }}> Read More</Button>
                                </NavLink>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ListView
