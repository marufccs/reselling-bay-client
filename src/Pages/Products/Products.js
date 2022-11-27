import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import Modal from '../../Shared/Modal/Modal';
import { AuthContext } from '../../UserContext/UserContext';
import Product from './Product';

const Products = () => {
    const [bookData, setBookData] = useState(' ');

    const {loading} = useContext(AuthContext);

    const usedBooks = useLoaderData();
    console.log(usedBooks);
  
    if(loading){
        return <Loader/>
    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:ml-20 sm:ml-12 my-20'>
            {
                usedBooks.map(book => 
                <Product key={book._id}
                 book={book}
                 setBookData={setBookData}
                 bookData={bookData}
                 ></Product>)
            }
            <Modal bookData={bookData} setBookData={setBookData}/>
        </div>
    );
};

export default Products;