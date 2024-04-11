import React from 'react'
import Button from '@mui/material/Button';
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div style={{ background: "#003049", color: "white" }} className=''>
            <div className="footer_card row  text-center py-4 mx-auto rounded-3">
                <div className='col-md-6'>
                    <h5>Ready to get started ?</h5>
                    <h5>Talk to us today</h5>
                </div>
                <div className='my-auto col-md-6 text-md-end'>
                    <Button variant="contained" className='text-light fw-light  mt-2' style={{ background: "#274c77" }}>Get Started</Button>

                </div>
            </div>

            <footer>
                <div className="container ">
                    <div className="row py-5 ">
                        <div className="col-md-3 py-2">
                            <h5>E-commerce Store</h5>
                            <p>E-Shopify is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.</p>
                        </div>
                        <div className="col-md-3 py-2">
                            <h5>Subscribe to get important updates</h5>
                            <form >
                                <input type="text " placeholder='Your Email' className='p-1' />
                                <div>

                                    <Button variant="contained" className='text-light fw-bold mt-2' style={{ background: "#c1121f" }}>Subscribe</Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-3 py-2">
                            <h5>Follow us</h5>
                            <div className=' row gap-5'>
                                <div className='  col-1 '>
                                    <NavLink to="https://api.whatsapp.com/qr/CE2NQOCPJFHBM1?autoload=1&app_absent=0">

                                        <FaWhatsapp className='  fs-1 text-white border border-1 rounded-circle p-2' />
                                    </NavLink>
                                </div>
                                <div className='  col-1'>
                                    <NavLink to="https://www.instagram.com/manankumar_06/?r=nametag">

                                        <FaInstagram className=' fs-1 text-white border border-1 rounded-circle p-2' />
                                    </NavLink>

                                </div>
                                <div className='  col-1' >
                                    <NavLink to="https://github.com/Manankumar6">

                                        <FaGithub className=' fs-1 border text-white border-1 rounded-circle p-2' />
                                    </NavLink>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 ">
                            <h5>Call us</h5>
                            <Link to="tel:6398401607" className="contact">+91 6398401607</Link>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="d-flex  justify-content-center align-items-center py-3  border-top position-related bottom-0">


                <p>@{new Date().getFullYear()} | All Right Reversed  <span className="text-light"> | Made With ♥ By Manan</span></p>     



            </footer>
        </div>
    )
}

export default Footer
