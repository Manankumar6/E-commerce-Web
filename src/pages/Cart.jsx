import React from 'react'
import { useCartContext } from '../context/Cart_context'
import CartItem from '../components/CartItem'
import { Button } from '@mui/material';
import {NavLink } from 'react-router-dom'

const Cart = () => {
  const { cart ,clearCart} = useCartContext()

  if(cart.length === 0 ){
    return(
      <div className="container text-center my-auto">
        <h1>No cart in item</h1>
        <img src="images/emptycart.webp" alt="emptycart"  style={{width:"50%" , height:"50%"}}/>
      </div>
    )
  }

  return (

    <div className='container border border-1 my-5 '>
      <div className="row text-end text-md-center fw-bold">
        <div className="col-2"><p>Item</p></div>
        <div className="col-2 d-none d-md-block"><p>Price</p></div>
        <div className="col-7 col-md-4"><p>Quantity</p></div>
        <div className="col-2 d-none d-md-block"><p>Subtotal</p></div>
        <div className="col-3 col-md-2"><p>Remove</p></div>
        <hr />
      </div>

      <div className="row">
        {cart.map((currEle)=>{
          return <CartItem key={currEle.id} {...currEle}/>
        })}
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <NavLink to='/product'> <Button variant="contained" className='text-light fw-light  mt-2' style={{ background: "#274c77" , }}>Continue Shopping</Button></NavLink>
        <Button variant="contained" style={{ background: "#fb5607" , }} onClick={clearCart}>Clear Cart</Button>
      </div>
    </div>
   
  
  )
}

export default Cart
