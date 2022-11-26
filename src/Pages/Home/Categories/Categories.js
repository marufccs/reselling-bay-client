import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Shared/Loader/Loader';
import Category from './Category/Category';

const Categories = () => {

    const { data: categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data
        }
    })
    
    if(isLoading){
        return <Loader/>
    }

    return (
        <div className='lg:mb-72 sm:mb-56 lg:mx-20 sm:ml-20 md:ml-20 md:mx-auto  font-semibold'>
           <h2 className='text-5xl mb-6'>Categories</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:mx-20 gap-6 lg:gap-18 md:gap-x-12 mx-auto'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
           </div>
        </div>
    );
};

export default Categories;