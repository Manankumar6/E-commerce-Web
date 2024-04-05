import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
const Services = () => {
    return (
        <div>
            <div className="container-fluid my-5  px-md-5">
                <div className="row px-2 ps-md-5  text-center gap-1 "  >
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center " style={{ background: "#f5ebe0" }}>
                        <TbTruckDelivery className='fs-1 bg-white rounded-circle ' />
                        <h5>Super Fast & Free Delivery</h5>
                    </div>
                    <div className="col-md-5   ">
                        <div className="row " style={{ background: "#f5ebe0" }}>
                            <div className="col d-flex justify-content-center align-items-center py-2">
                                <MdSecurity className='fs-1 mx-2 bg-white rounded-circle ' />
                                <h5>None-contact Shipping</h5>
                            </div>
                        </div>
                        <div className="row" style={{ background: "#f5ebe0" }}>

                            <div className="col  d-flex justify-content-center align-items-center py-2">
                                <GiReceiveMoney className='fs-1  mx-2 bg-white rounded-circle  ' />
                                <h5>Money-Back Policy</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 gap-auto d-flex flex-column justify-content-center align-items-center" style={{ background: "#f5ebe0" }}>
                        <RiSecurePaymentFill className='fs-1 bg-white rounded-circle ' />
                        <h5>Super Secure Payment System</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
