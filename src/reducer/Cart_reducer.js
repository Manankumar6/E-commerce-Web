

const Cart_reducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, singleProduct } = action.payload
        let cartProduct;
        cartProduct = {
            id: id + color,
            name: singleProduct.name,
            color,
            amount,
            image: singleProduct.image[0].url,
            price: singleProduct.price,
            max: singleProduct.stock,


        }
        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }
    }


    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter((currItem) => {
        return currItem.id !== action.payload
    })
    return {
        ...state,
        cart: updateCart
    }
}

if(action.type === "CLEAR_CART"){
    return{
        ...state,
        cart:[]
    }
}
return state;

}
export default Cart_reducer
