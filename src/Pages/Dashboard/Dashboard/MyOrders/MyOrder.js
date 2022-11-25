import React from 'react';

const MyOrder = ({bookedBook}) => {
const {bookName, bookPrice, img} = bookedBook;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img className='h-60 w-full' src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold"> {bookName} </h2>
          <p>Price: {bookPrice}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-accent text-white">Pay Now</button>
          </div>
        </div>
      </div>
    );
};

export default MyOrder;