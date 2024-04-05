import React from 'react'
import PriceFormat from '../helper/PriceFormat'
import CartAmount from './CartAmount'
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/Cart_context';
import { Button } from '@mui/material';


const CartItem = ({ id, name, image, color, price, amount }) => {
  const {removeItem} = useCartContext()
  const setDecrease = () => {
    // amount>1?setAmount(amount-1):setAmount(1)
  }
  const setIncrease = () => {
    // amount<stock ? setAmount(amount+1):setAmount(stock)
  }
  return (
    <>
    <div className='row mx-auto text-md-center'>
      <div className="col-md-2 col-6  " style={{ fontSize: "15px" }}>
        <div className="row">
          <div className="col my-auto">
            <img src={image} alt={id} style={{ width: "80px", height: "50px" }} />
          </div>
          <div className="col">
            <div className="row "><p className='m-0 p-0'>{name}</p></div>
            <div className="row  "><p className='d-flex justify-content-sm-center'>Color:<p className=' clrbtn border border-2' style={{ background: color, width: "20px", height: "20px" }}></p></p></div>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="col-2  d-none d-md-block"><p>{<PriceFormat price={price} />}</p></div>
      {/* Quantity */}
      <div className="col-4 "><p className='d-flex justify-content-center'>  <CartAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      /></p></div>
      {/* Subtotal */}
      <div className="col-2 d-none d-md-block"><p>
        <PriceFormat price={price * amount} />
        </p></div>
        {/* Remove */}
      <div className="col-2 col-md-2"><p>
       <Button> <FaTrash className='text-danger cursor' onClick={()=>{removeItem(id)}}/></Button>
        </p></div>
    </div>
  
    </>
  )
}


export default CartItem
