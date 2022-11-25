import React, { useContext } from 'react';
import { HiCheck } from "react-icons/hi";
import Swal from 'sweetalert2';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../UserContext/UserContext';

const Product = ({book, setBookData}) => {
    const { img, title, location, originalPrice, resalePrice, yearsOfUse, time, sellerName} = book;

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
      fetch('http://localhost:5000/wishlist', {
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
    <p>Post time: {time}</p>
    <div className='flex '>
    <p>Seller Name: {sellerName}</p>
    <span className="text-white bg-blue-600 rounded-full p-1"> <HiCheck/> </span>
    </div>
    </div>
    <div className="card-actions justify-between">
      <button onClick={() => handleAddingToWishList(img, title, resalePrice, user.email)} className='btn btn-info text-white'>Add To WishList</button>
      <label htmlFor="booking-modal" className="btn btn-accent text-white"onClick={() => setBookData(book)}>Book Now</label>
    </div>
  </div>
</div>
    );
};

export default Product;