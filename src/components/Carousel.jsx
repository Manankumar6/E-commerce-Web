import React from 'react'
import { useFilterContext } from '../context/Filter_context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
    const { all_products } = useFilterContext()
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    console.log(all_products, "all products")
  return (
    <div>
          {/* Carousel */}
      <div className='container-fluid text-center d-flex justify-content-center my-5 ' style={{background:"#f5ebe0"}}>

<div className='py-5 w-100 px-5 '>
  <Slider {...settings}>
{
  all_products && all_products.map((currEle, ind) => {
    return <>
      <img className='mx-auto' src={currEle.image} alt="imag" width="100%" height="100%" />
     

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
