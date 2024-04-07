import React from 'react'
import PriceFormat from '../helper/PriceFormat'
import CartAmount from './CartAmount'
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/Cart_context';
import { Button } from '@mui/material';


const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrease } = useCartContext()

  return (
    <>
      <div className='row mx-auto text-md-center p-0'>
        <div className="col-md-2 col-6  " style={{ fontSize: "15px" }}>
          <div className="row">
            <div className="col my-auto">
              <img src={image} alt={id} style={{ width: "80px", height: "50px" }} />
            </div>
            <div className="col">
              <div className="row "><p className='m-0 p-0'>{name}</p></div>
              <div className="row  "><div className='d-flex justify-content-sm-center'>Color:<p className=' clrbtn border border-2' style={{ background: color, width: "20px", height: "20px" }}></p></div></div>
            </div>
          </div>
        </div>
        {/* Price */}
        <div className="col-2  d-none d-md-block"><p>{<PriceFormat price={price} />}</p></div>
        {/* Quantity */}
        <div className="col-4 "><div className='d-flex justify-content-center'>
          <CartAmount
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div></div>
        {/* Subtotal */}
        <div className="col-2 d-none d-md-block"><p>
          <PriceFormat price={price * amount} />
        </p></div>
        {/* Remove */}
        <div className="col-2 col-md-2"><p>
          <Button> <FaTrash className='text-danger cursor' onClick={() => { removeItem(id) }} /></Button>
        </p></div>
      </div>

    </>
  )
}


export default CartItem
