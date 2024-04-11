import React from 'react'
import { useFilterContext } from '../context/Filter_context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';
const Carousel = () => {
  const { all_products } = useFilterContext()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  
  return (
    <div>
      {/* Carousel */}
      <div className='container-fluid text-center d-flex justify-content-center  p-0' style={{ background: "#f5ebe0" }}>

        <div className='py-5 w-100 ov overflow-hidden'>
          <Slider {...settings}>
            {
              all_products && all_products.map((currEle, ind) => {
                return <>
                <NavLink to='/product'>
                  <img className='mx-auto carousel-img' src={currEle.image} alt="imag" width="100%" />
                </NavLink>
                </>
              })
            }
          </Slider>
        </div>
      </div>

    </div>
  )
}

export default Carousel
