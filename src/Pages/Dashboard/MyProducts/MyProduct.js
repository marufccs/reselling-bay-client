import React from 'react';
import { HiCheck } from 'react-icons/hi';

const MyProduct = ({myProduct}) => {
    const { img, title, location, originalPrice, resalePrice, yearsOfUse, time, sellerName, productCondition, productDescription} = myProduct;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-72 w-full' src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className='text-left'>
          <p>Location: {location}</p>
          <p>Original Price: €{originalPrice}</p>
          <p>Resale Price: €{resalePrice}</p>
          <p>Years of Use: {yearsOfUse}</p>
          <p>Condition of the Product: {productCondition}</p>
          <p>Description: {productDescription}</p>
          <p>Post time: {time}</p>
          <div className='flex '>
          <p>Seller Name: {sellerName}</p>
          <span className="text-white bg-blue-600 rounded-full p-1"> <HiCheck/> </span>
          </div>
          </div>
        </div>
      </div>
    );
};

export default MyProduct;