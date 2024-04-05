import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import Button from '@mui/material/Button';
import { useFilterContext } from '../context/Filter_context';

const Sort = () => {
  const { grid_view, setGridView, setListView,filter_products ,sorting} = useFilterContext()

 
  return (
    <div className=' row pt-2 d-flex align-items-center gap-1 gap-md-0'>
      <div className="col-12 col-md-4  ps-2  justify-content-md-start  order-1 ">
        <div className="d-flex gap-3">

          <Button variant={grid_view ? 'contained' : ""} className={grid_view ? 'grid_btn active' : "grid_btn"} onClick={setGridView}> <BsFillGridFill /></Button>
          <Button variant={!grid_view ? 'contained' : ""} className={!grid_view ? 'grid_btn active' : "grid_btn"} onClick={setListView}><BsListUl /></Button>
        </div>
      </div>
      <div className=" col-12 col-md-4  d-flex justify-content-center  order-3 order-md-2 fw-bold">{filter_products.length} Products Available</div>
      <div className=" col-12 col-md-4  ps-2  order-2 order-md-3">
        <form action="#">
        <label htmlFor="sort"></label>
          <select name="sort" id="sort" onClick={sorting} >
            <option value="lowest">Price(lowest)</option>
            <option value="highest">Price(Highest)</option>
            <option value="a-z">Price(a-z)</option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>

    </div>
  )
}

export default Sort
