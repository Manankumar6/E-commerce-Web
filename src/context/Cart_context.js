import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/Cart_reducer'
const CartContext = createContext()
const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("CartItem")
    if(localCartData.length === null){
        return []
    }else{
        return JSON.parse(localCartData)
    }
}
const intialState={
    cart:getLocalCartData(),
    total_item:"",
    total_price:0,
    shipping_fee:5000
}
const CartProvider = ({children})=>{
    const [state,disptach] = useReducer(reducer,intialState)
const addToCart = (id,color,amount,singleProduct)=>{
    disptach({type:"ADD_TO_CART", payload:{id,color,amount,singleProduct}})

}
// remove item from cart 
const removeItem =(id)=>{
    disptach({type:"REMOVE_ITEM", payload:id})
}

// increment and descrement 
const setDecrease=(id)=>{
    disptach({type:"SET_DECREMENT", payload:id})
}
const setIncrease = (id)=>{
    disptach({type:"SET_INCREMENT", payload:id})

}

// to clear cart data 
const clearCart = ()=>{
    disptach({type:"CLEAR_CART"})
}
useEffect(()=>{
    // disptach({type:"CART_TOTALITEM"})
    // disptach({type:"CART_TOTALPRICE"})
    disptach({type:"CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("CartItem",JSON.stringify(state.cart))
},[state.cart])

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrease}}>
        {children}
        </CartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}