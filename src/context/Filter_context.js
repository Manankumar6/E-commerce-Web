import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
import reducer from '../reducer/filterReducer'

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest",
    filters: {
        text: "",
        category:"all",
        company:"all",
        colors:"all",
        name:"",
        email:"",
        message:"",
        price:0,
        maxPrice:0,
        minPrice:0
    }

}
const FilterContext = createContext()

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    // set grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }
    const setListView = () => {
        return dispatch({ type: "SET_List_VIEW" })
    }

    // sorting function
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }


    // handle Input
    const handleInput = (e) => {
        const { name, value } = e.target
        return dispatch({ type: "UPDATE_INPUT_VALUE", payload: { name, value } })
    }

    // to clear filter 
    const clearFilter=()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }
    // to sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS", payload: products })

    }, [products, state.sorting_value, state.filters])

    // to sort all the products for grid and list view 
    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
        // eslint-disable-next-line
    }, [products])
    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, handleInput,clearFilter }}>
            {children}
        </FilterContext.Provider>
    )
}
export const useFilterContext = () => {
    return useContext(FilterContext)
}