import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WishListedBook from './WishListedBook';

const MyWishList = () => {
    const wishListedBooks = useLoaderData();
    console.log(wishListedBooks);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:ml-48 lg:mt-16'>
            {
                wishListedBooks.map(singleBook => <WishListedBook key={singleBook._id} singleBook={singleBook}></WishListedBook>)
            }
        </div>
    );
};

export default MyWishList;