

const Cart_reducer = (state, action) => {


    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, singleProduct } = action.payload

        let existingItem = state.cart.find((currEle) =>
            currEle.id === id + color
        )
        
        if (existingItem) {
            let updateProduct = state.cart.map((currItem) => {
                if (currItem.id === id + color) {
                    let newAmount = currItem.amount + amount

                    if (newAmount >= currItem.max) {
                        newAmount = currItem.max

                    }
                    return {
                        ...currItem,
                        amount: newAmount,

                    }
                } else {
                    return currItem
                }
            })
            return {
                ...state,
                cart: updateProduct
            }

        } else {


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
    }
    // set increment and decrement 
    if (action.type === "SET_DECREMENT") {
        let updateProduct = state.cart.map((currEle) => {
            if (currEle.id === action.payload) {
                let decAmount = currEle.amount - 1
                if (decAmount <= 1) {
                    decAmount = 1
                }
                return {
                    ...currEle,
                    amount: decAmount
                }
            } else {
                return currEle
            }
        })
        return {
            ...state,
            cart: updateProduct
        }
    }
    if (action.type === "SET_INCREMENT") {
        let updateProduct = state.cart.map((currEle) => {
            if (currEle.id === action.payload) {
                let incAmount = currEle.amount + 1
                if (incAmount >= currEle.max) {
                    incAmount = currEle.max
                }
                return {
                    ...currEle,
                    amount: incAmount
                }
            } else {
                return currEle
            }
        })
        return {
            ...state,
            cart: updateProduct
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

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }
    // total cart items 
    // if (action.type === "CART_TOTALITEM") {
    //     let updateItem = state.cart.reduce((intialVal, currEle) => {
    //         let { amount } = currEle
    //         intialVal = intialVal + amount
    //         return intialVal
    //     }, 0)
    //     return {
    //         ...state,
    //         total_item: updateItem
    //     }
    // }

    // // order details 
    // if (action.type === "CART_TOTALPRICE") {
    //     let total_price = state.cart.reduce((initialVal, currEle) => {
    //         let { price, amount } = currEle
    //         initialVal = initialVal + (price * amount)
    //         return initialVal
    //     }, 0)
    //     return {
    //         ...state,
    //         total_price
    //     }
    // }
    if (action.type === "CART_ITEM_PRICE_TOTAL") {
        // Check if state.cart is null or undefined, and handle it appropriately
        if (!state.cart) {
            return state; // Return the current state without making any changes
        }
    
        // Calculate total item and total price
        let { total_item, total_price } = state.cart.reduce((accum, currEle) => {
            let { price, amount } = currEle;
            accum.total_item += amount;
            accum.total_price += price * amount
            return accum;
        }, {
            total_item: 0,
            total_price: 0
        });
    
        return {
            ...state,
            total_item,
            total_price
        };
    }
    return state;

}
export default Cart_reducer
