import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, img, category_name} = category;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='h-60 w-full' src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="text-2xl text-center">{category_name}</h2>
    <div className="card-actions justify-center">
      <Link to={`/category/${_id}`}>
      <button className="btn btn-accent text-white mr-2">Explore More <span className='ml-4'> <FaArrowRight/> </span> </button>
      </Link>
    </div>
  </div>
</div>
    );
};



export default Category;