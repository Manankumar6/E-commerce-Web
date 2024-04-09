import React from 'react'
import { useCartContext } from '../context/Cart_context'
import CartItem from '../components/CartItem'
import { Button } from '@mui/material';
import {NavLink } from 'react-router-dom'
import PriceFormat from '../helper/PriceFormat';
import { useAuth0 } from "@auth0/auth0-react";
const Cart = () => {
  const { cart ,clearCart,total_price,shipping_fee} = useCartContext()
  const {isAuthenticated,user} = useAuth0();
  if(cart.length === 0 ){
    return(
      <div className="container text-center my-auto">
        <h1>No items in cart</h1>
        <img src="images/emptycart.webp" alt="emptycart"  style={{width:"50%" , height:"50%"}}/>
      </div>
    )
  }

  return (

    <div className='container my-5 '>

    {
      isAuthenticated&&(
        <div>
          <img src={user.picture} alt={user.name} className='rounded-circle'  />
          <h4>{user.name}</h4>
          <hr />
        </div>

      )
    }
  <div className=' '>


      <div className="row text-end text-md-center fw-bold">
        <div className="col-2"><p>Item</p></div>
        <div className="col-2 d-none d-md-block"><p>Price</p></div>
        <div className="col-7 col-md-4"><p>Quantity</p></div>
        <div className="col-2 d-none d-md-block"><p>Subtotal</p></div>
        <div className="col-3 col-md-2"><p>Remove</p></div>
        <hr />
      </div>

      <div className="row">
        {cart.map((currEle,ind)=>{
          return <CartItem key={ind} {...currEle}/>
        })}
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <NavLink to='/product'> <Button variant="contained" className='text-light fw-light  mt-2' style={{ background: "#274c77" , }}>Continue Shopping</Button></NavLink>
        <Button variant="contained" style={{ background: "#fb5607" , }} onClick={clearCart}>Clear Cart</Button>
      </div>
      {/* order details */}
      <div className=" my-5  d-flex justify-content-end ">
        <div className="col-sm-6 col-lg-3 col-12 p-2  rounded-3 " style={{background:"#eef4ed"}}>
          <div className="d-flex justify-content-between">
            <p>Subtotal :</p>
            <p className='fw-bold'><PriceFormat price={total_price}/></p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping :</p>
            <p className='fw-bold'><PriceFormat price={shipping_fee}/></p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Order:</p>
            <p className='fw-bold'><PriceFormat price={shipping_fee+ total_price}/></p>
          </div>
        
        </div>
      </div>
      </div>
    </div>
   
  
  )
}

export default Cart
