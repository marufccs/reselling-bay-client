import React from 'react';

const Product = ({book}) => {
    const { img, title, location, originalPrice, resalePrice, yearsOfUse, time, sellerName} = book;
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
    <p>Post time: {time}</p>
    <p>Seller Name: {sellerName}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-accent text-white">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;