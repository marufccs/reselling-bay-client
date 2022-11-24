import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SelectCategory = ({category, setTestData, testData}) => {
    const {_id, img, category_name} = category;
    console.log(testData);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='h-60 w-full' src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="text-2xl text-center">{category_name}</h2>
          <div className="card-actions justify-center">
            <Link to={`/dashboard/addproduct/${_id}`}>
            <button onClick={() => setTestData(category)} className="btn btn-accent text-white mr-2">Select this category <span className='ml-4'> <FaArrowRight/> </span> </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SelectCategory;