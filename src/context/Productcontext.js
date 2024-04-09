import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import ProductReducer from "../reducer/ProductReducer";
const AppContext = createContext()


const API = "https://api.pujakaitem.com/api/products"
const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState)



    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {

            const res = await axios.get(url)
            const product = await res.data
     

            dispatch({ type: "SET_API_DATA", payload: product })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url)
           
            const singleProduct = await res.data
       
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })

        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }
    const capitalize = (word) => {
        if (word) {
             return word.charAt(0).toUpperCase() + word.slice(1)
        }
        return
    }
    useEffect(() => {
        getProducts(API)
    }, [])

    return <AppContext.Provider value={{ ...state, getSingleProduct,capitalize }}>
        {children}
    </AppContext.Provider>
}

// custom Hook for contextapi
const useProductContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext, useProductContext }