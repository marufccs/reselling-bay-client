import React from 'react';
import { HiCheck } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyProduct = ({myProduct}) => {
    const { img, title, location, originalPrice, resalePrice, yearsOfUse, time, sellerName, productCondition, productDescription} = myProduct;
    const navigate = useNavigate();

    const handleAdvertise = () => {
        const product = myProduct;
        fetch(`https://used-products-resale-market-server-eight.vercel.app/advertisedbooks`, {
                method: 'POST',
                headers: {
                  'content-type' : 'application/json',
                },
                body: JSON.stringify(product)
              })
              .then( res => res.json())
              .then(result => {
                Swal.fire(
                    'Awesome!',
                    'Your product has been advertised successfully!',
                    'success'
                  )
                  navigate('/')

              })
    }

    return (
        <div className="card w-96 bg-base-100 mb-24 shadow-xl">
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
          <div className='flex justify-around gap-12'>
          <h4 className='text-xl'>Sales status:
           <button className='btn btn-ghost'>Available</button> </h4>
          </div>
         
          </div>
          <button onClick={handleAdvertise} className='btn btn-accent text-white'>Advertise</button>
        </div>
        
      </div>
    );
};

export default MyProduct;