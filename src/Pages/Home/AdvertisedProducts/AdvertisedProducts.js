import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../../Shared/Loader/Loader';
import Modal from '../../../Shared/Modal/Modal';
import AdvertisedProduct from './AdvertisedProduct';

const AdvertisedProducts = () => {
    
    const [bookData, setBookData] = useState(' ');

    const { data: books = [], isLoading} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-market-server-eight.vercel.app/advertisedbooks`);
            const data = await res.json();
            return data
        }
    })
    
    if(isLoading){
        return <Loader/>
    }

    return (
        <div className='lg:mb-72 sm:mb-56 lg:mx-20 sm:ml-20 md:ml-20 md:mx-auto  font-semibold'>
           <h2 className='text-5xl mb-6'>Advertised Books</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-20 gap-6 lg:gap-18 md:gap-x-12 mx-auto'>
            {
                books.map(books => <AdvertisedProduct key={books._id} books={books} setBookData={setBookData}> </AdvertisedProduct>)
            }
            <Modal bookData={bookData} setBookData={setBookData}/>
           </div>
        </div>
    );
};

export default AdvertisedProducts;