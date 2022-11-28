import React from 'react';
import { Link } from 'react-router-dom';

const WishListedBook = ({singleBook}) => {
    const {_id, Price, imgUrl, title} = singleBook;
    console.log(singleBook);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-60 w-full' src={imgUrl} alt="" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold"> {title} </h2>
          <p>Price: €{Price}</p>
          <div className="card-actions justify-center">
          <Link to={`/dashboard/payment/${_id}`}>
           <button className="btn btn-accent text-white">Pay Now</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default WishListedBook;