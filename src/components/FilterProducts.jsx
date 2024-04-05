import React from 'react'
import { useFilterContext } from '../context/Filter_context'
import Button from '@mui/material/Button';
import { useProductContext } from '../context/Productcontext';
import { FaCheck } from "react-icons/fa";
import PriceFormat from '../helper/PriceFormat';

const FilterProducts = () => {
  const { filters: { text,colors,price,maxPrice,minPrice }, handleInput, all_products ,clearFilter} = useFilterContext()
  const { capitalize } = useProductContext()
  // To get unique data 
  const getUniqueData = (data, prop) => {
    let newVal = data.map((currEle) => {
      return currEle[prop]
    })
    if (prop === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))])
      newVal = newVal.flat();
    } 

      return newVal = ["all",...new Set(newVal)]
    

  }


  // Filter Unique Data
  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")
  const colorsData = getUniqueData(all_products, "colors")


  return (
    <>
      <div className='row' >
        <div className="col m-0 p-0">
          <form onSubmit={(e) => e.preventDefault()} className='py-2 px-2 '>
            <input className=' input' placeholder='SEARCH ITEM' aria-describedby="emailHelp" type="text" name='text' value={text} onChange={handleInput} />
          </form>
        </div>
      </div>
      <div>
        <h4>Category</h4>
        <div >
          {categoryData.map((currEle, ind) => {
            return (
              <div className="row category ">

                <Button className='d-flex justify-content-start ps-md-4 text-dark '  key={ind} name="category" value={currEle} onClick={handleInput} >
                  {currEle}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
      <div className='my-1'>
        <form action="#" className='w-100'>
          <select name="company" id="company" onClick={handleInput} style={{ width: "80%" }}>
            {
              companyData.map((currEle, ind) => {
                return <option value={currEle} key={ind} name="company"  >{capitalize(currEle)}</option>
              })
            }

          </select>
        </form>
      </div>
      <div className='my-2'>
        <h4>Colors</h4>
        <div className="d-md-flex   "  >
          {
            colorsData.map((currEle,ind)=>{
              if(currEle === 'all'){
                return(

                  <button type='button' key={ind} className='all_btn'   name='colors' value={currEle} onClick={handleInput}> All</button>
                )
              }
              return(
              <button type='button' key={ind} className={colors===currEle?" clrbtn active":" clrbtn"} style={{background:currEle }} name='colors' value={currEle} onClick={handleInput}> {colors===currEle?<FaCheck/>:null}</button>
                
              )
            })
          }
        </div>
      </div>

     <div className='my-2'>
      <h4>Price</h4>
      <p><PriceFormat  price={price}/></p>
      <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={handleInput} style={{width:"100%"}}/>

     </div>
     <div className="my-2">
     <Button variant="contained" className='text-light fw-light  mt-2' style={{ background: "#c1121f" , }} onClick={clearFilter}>Clear Filter</Button>
     </div>

    </>
  )
}










export default FilterProducts
