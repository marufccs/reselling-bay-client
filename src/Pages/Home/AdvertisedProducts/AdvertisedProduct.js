import React, { useContext, useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loader from '../../../Shared/Loader/Loader';
import { AuthContext } from '../../../UserContext/UserContext';

const AdvertisedProduct = ({books, setBookData}) => {
    const { img, title, location, originalPrice, resalePrice, yearsOfUse, time, sellerName, productCondition, productDescription} = books;
    const navigate = useNavigate();

     
    const [categoryBasedProduct, setCategoryBasedProduct] = useState([])

    useEffect(() => {
        fetch(`https://used-products-resale-market-server-eight.vercel.app/categories`)
        .then(res => res.json())
        .then(data => {
            setCategoryBasedProduct(data);
        })
    },[])
  

    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Loader/>
    }


    const handleAddingToWishList = (img, title, price, email) => {
        const bookWishListed = {
          title: title,
          imgUrl: img,
          Price: price,
          email: email,
        }
        fetch('https://used-products-resale-market-server-eight.vercel.app/wishlist', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(bookWishListed)
          })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if (data.acknowledged) {
                      setBookData(' ');
                      Swal.fire(
                          'Congrats Book Lover!',
                          "You added this book to your wishlist!",
                          'success'
                        )
                        navigate(`/dashboard/mywishlist/${email}`)
                  }
                  else{
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: "You couldn't add this book to your wishlist",
                        })
                  }
              })
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
          <p>Condition of the Product: {productCondition}</p>
          <p>Description: {productDescription}</p>
          <p>Post time: {time}</p>
          <div className='flex '>
          <p>Seller Name: {sellerName}</p>
          <span className="text-white bg-blue-600 rounded-full p-1"> <HiCheck/> </span>
          </div>
          </div>
          <div className="card-actions justify-between">
    <button onClick={() => handleAddingToWishList(img, title, resalePrice, user.email)} className='btn btn-info text-white'>Add To WishList</button>
      <label htmlFor="booking-modal" className="btn btn-accent text-white"onClick={() => setBookData(books)}>Book Now</label>
    </div>
        </div>
      </div>
    );
};

export default AdvertisedProduct;