import React, { useContext } from 'react';
import { HiCheck } from "react-icons/hi";
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../UserContext/UserContext';

const Product = ({book, setBookData}) => {
    const { img, title, location, originalPrice, resalePrice, yearsOfUse, time, sellerName} = book;
    const {loading} = useContext(AuthContext);
    if(loading){
        return <Loader/>
    }
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
    <div className='flex '>
    <p>Seller Name: {sellerName}</p>
    <span className="text-white bg-blue-600 rounded-full p-1"> <HiCheck/> </span>
    </div>
    </div>
    <div className="card-actions justify-end">
      <label htmlFor="booking-modal" className="btn btn-accent text-white"onClick={() => setBookData(book)}>Book Now</label>
    </div>
  </div>
</div>
    );
};

export default Product;