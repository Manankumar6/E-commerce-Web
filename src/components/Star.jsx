import React from 'react'
import { FaStar  } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { AiOutlineStar } from "react-icons/ai";
const Star = ({stars,reviews}) => {
 
    const ratingStar = Array.from({length:5},(elem,index)=>{
  
        let number = index + 0.5
     
        return(
            <span key={index}>{
            stars>= index + 1 ? (<FaStar/>): stars >=number ? (<FaStarHalfStroke/>):(<AiOutlineStar/>)
            }</span>
        )
    })
  return (
    <div>
        <div className=" text-warning">

      {  ratingStar  }
      <span className='text-dark fw-bold'>  {reviews} ( Customer reviews )</span>
        </div>
    </div>
  )
}

export default Star
