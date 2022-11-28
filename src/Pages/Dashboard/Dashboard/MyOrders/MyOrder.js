import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({bookedBook}) => {
const {_id, bookName, bookPrice, img} = bookedBook;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-60 w-full' src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold"> {bookName} </h2>
          <p>Price: {bookPrice}</p>
          <div className="card-actions justify-center">
           { bookPrice && !bookedBook.paid && 
             <Link to={`/dashboard/payment/${_id}`}>
             <button className="btn btn-accent text-white">Pay Now</button>
             </Link>
           }
           { bookPrice && bookedBook.paid && 
             <Link>
             <button className="btn btn-green text-white">Paid</button>
             </Link>
           }
          </div>
        </div>
      </div>
    );
};

export default MyOrder;