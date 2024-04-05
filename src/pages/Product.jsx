import React from 'react'
import FilterProducts from '../components/FilterProducts'
import Sort from '../components/Sort'
import ProductList from '../components/ProductList'
import { useFilterContext } from '../context/Filter_context'

const Product = () => {
  const {filter_products} = useFilterContext()

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3  ">
            
            <FilterProducts />
          </div>
          <div className="col-9  ">
            <div className="row">
              <Sort />
            </div>
            <div className="row ms-0">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
