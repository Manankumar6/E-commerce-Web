import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import CartAmount from '../components/CartAmount';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useCartContext } from '../context/Cart_context';
const AddCart = ({singleProduct}) => {
  const {addToCart} = useCartContext()
    const {id,colors,stock} = singleProduct
    const [color,setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1)

    const setDecrease = ()=>{
      amount>1?setAmount(amount-1):setAmount(1)
    }
    const setIncrease = ()=>{
      amount<stock ? setAmount(amount+1):setAmount(stock)
    }

  return (
    <div>
        <p>Colors: {colors.map((currClr,ind)=>{
            return (
                    <button key={ind} className={color===currClr?" clrbtn active":" clrbtn"} style={{background:currClr}} onClick={()=>setColor(currClr)}>
                      
                {color===currClr?<FaCheck/>:null}
                    </button>
            )
        })}</p>

        {/* Add to cart */}
        <CartAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
        />
        {/* Cart Page */}
        <div className='my-2'>

        <NavLink to='/cart' onClick={()=>addToCart(id,color,amount,singleProduct)} >
        <Button  variant="contained" style={{background:"#274c77"}} >Add to Cart</Button>
        </NavLink>
        </div>
        
    </div>

  )
}

export default AddCart
