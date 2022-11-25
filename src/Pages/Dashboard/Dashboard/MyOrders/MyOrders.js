import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const bookedBooks = useLoaderData();
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:ml-48 lg:mt-16'>
            {
                bookedBooks.map(bookedBook => <MyOrder key={bookedBook._id} bookedBook={bookedBook}></MyOrder>)
            }
        </div>
    );
};

export default MyOrders;