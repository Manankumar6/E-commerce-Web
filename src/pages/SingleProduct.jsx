import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../context/Productcontext'
import PriceFormat from '../helper/PriceFormat'
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import Images from '../components/Images';
import Star from '../components/Star';
import AddCart from './AddCart';


const singleProductURL = "https://api.pujakaitem.com/api/products"
const SingleProduct = () => {
    const { getSingleProduct, isSingleLoading, singleProduct,capitalize } = useProductContext()
    const { id } = useParams();
    const { id: alias, name, company, price, stars, description,  stock, reviews, image } = singleProduct





    useEffect(() => {
        getSingleProduct(`${singleProductURL}?id=${id}`)
        // eslint-disable-next-line
    }, [])
    if (isSingleLoading) {
        return <div className='container text-center'> Loading...</div>
    }
    return (
        <>
            <div className="container-fluid text-light" style={{ background: "#003049" }}>
                <div className="fs-4">

                    <NavLink to='/' className='text-primary p-0 nav-link d-inline-block' >Home</NavLink><span>/{name}</span>
                </div>
            </div>
        {/* single product image */}
            <div className='container my-5'>
                <div className="row">
                    <div className='col-md-7'>
                        {image &&

                            <Images image={image} />
                        }
                    </div>
                        {/* second column for product details */}
                    <div className="col-md-5">
                        <h2>{capitalize(name)}</h2>
                        <Star stars={stars} reviews={reviews} />

                        <p>MRP: <del>
                            <PriceFormat price={price + 250000} />

                        </del></p>
                        <p className='fw-bold' style={{ color: "#274c77" }}>Deal of the Day : <PriceFormat price={price + 250000} /></p>
                        <p>{description}</p>

                        <div className="row" style={{ fontSize: "0.8rem" }}>
                            <div className="col d-flex flex-column  align-items-center">
                                <TbTruckDelivery className='fs-4' />
                                <p>Free Delivery</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <TbReplace className='fs-4' />
                                <p >30 Days Replacement</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <TbTruckDelivery className='fs-4' />
                                <p> Easy Delivered</p>
                            </div>
                            <div className="col d-flex flex-column align-items-center">
                                <RiSecurePaymentFill className='fs-4' />
                                <p> 2 Years Warranty</p>
                            </div>
                            <hr />
                            <p>Available: <span className='fw-bold'> {stock > 0 ? "In Stock" : "Not Available"}</span></p>
                            <p>Brand: <span className='fw-bold'> {capitalize(company)}</span></p>
                        </div>
                        <hr />
                        {/* Colors Picker */}
                        {stock>0&& <AddCart singleProduct={singleProduct}/>}
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default SingleProduct
