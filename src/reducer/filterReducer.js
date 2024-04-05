const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":

            let priceArr = action.payload.map((currEle) => currEle.price)
            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SET_List_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "GET_SORT_VALUE":

            return {
                ...state,
                sorting_value: action.payload
            }

        case "SORTING_PRODUCTS":
            let newSortProduct
            const { filter_products, sorting_value } = state;
            let tempSortProducts = [...filter_products]

            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price
                }
                if (sorting_value === "highest") {
                    return b.price - a.price
                }
                if (sorting_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortProduct = tempSortProducts.sort(sortingProducts)
            return {
                ...state,
                filter_products: newSortProduct
            }
        case "UPDATE_INPUT_VALUE":
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value
                }
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempAll_Products = [...all_products];
            const { text, category, company, colors, price } = state.filters
            if (text) {
                tempAll_Products = tempAll_Products.filter((currEle) => {
                    return currEle.name.toLowerCase().includes(text)
                })
            }
            if (category !== "all") {
                tempAll_Products = tempAll_Products.filter((currEle) => {
                    return currEle.category === category
                })
            }
            if (company !== "all") {
                tempAll_Products = tempAll_Products.filter((currEle) => {
                    return currEle.company.toLowerCase() === company.toLowerCase()
                })
            }
            if (colors !== 'all') {
                tempAll_Products = tempAll_Products.filter((currEle) => {
                    return currEle.colors.includes(colors)
                })
            }
            if (price === 0) {

                tempAll_Products = tempAll_Products.filter((currEle) => currEle.price === price)
            } else {
                tempAll_Products = tempAll_Products.filter((currEle) => currEle.price <= price)
            }

            return {
                ...state,
                filter_products: tempAll_Products
            }

        case "CLEAR_FILTERS":
            return {

                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category:"all",
                    company:"all",
                    colors:"all",
                    price:state.filters.maxPrice,
                    maxPrice:state.filters.maxPrice,
                    minPrice:0

                }
            }

        default: return state
    }

}

export default filterReducer