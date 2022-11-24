import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../UserContext/UserContext';
import Product from './Product';

const Products = () => {

    const usedBooks = useLoaderData();

    const {loading} = useContext(AuthContext);
    if(loading){
        return <Loader/>
    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:ml-20 sm:ml-12 my-20'>
            {
                usedBooks.map(book => <Product key={book._id} book={book}></Product>)
            }
        </div>
    );
};

export default Products;