import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/Cart_reducer'
const CartContext = createContext()
const getLocalCartData = ()=>{
    let localCartData = localStorage.getItem("CartItem")
    if(localCartData.length === 0){
        return []
    }else{
        return JSON.parse(localCartData)
    }
}
const intialState={
    cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:5000
}
const CartProvider = ({children})=>{
    const [state,disptach] = useReducer(reducer,intialState)
const addToCart = (id,color,amount,singleProduct)=>{
    disptach({type:"ADD_TO_CART", payload:{id,color,amount,singleProduct}})

}

const removeItem =(id)=>{
    disptach({type:"REMOVE_ITEM", payload:id})
}

// to clear cart data 
const clearCart = ()=>{
    disptach({type:"CLEAR_CART"})
}
useEffect(()=>{
    localStorage.setItem("CartItem",JSON.stringify(state.cart))
},[state.cart])

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart}}>
        {children}
        </CartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(CartContext)
}

export {CartProvider,useCartContext}