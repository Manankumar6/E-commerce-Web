import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Button from '@mui/material/Button';
const CartAmount = ({amount,setDecrease,setIncrease}) => {

  return (
    <div className='d-flex'> 
      <Button variant="outlined" color='error' className='btn minus-btn' onClick={() => setDecrease()}><FaMinus/></Button>
      <div className='px-3'>{amount}</div>
      <Button variant="outlined" color='success' className='btn plus-btn' onClick={() => setIncrease()}><FaPlus/></Button>
    </div>
  )
}

export default CartAmount
