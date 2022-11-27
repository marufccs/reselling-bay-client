import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../../Shared/Loader/Loader';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {

    const { data: books = [], isLoading} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertisedbooks`);
            const data = await res.json();
            return data
        }
    })
    
    console.log(books);

    if(isLoading){
        return <Loader/>
    }

    return (
        <div>
            <Banner/>
            {
                books.length>0 && <AdvertisedProducts/>
            }
            <Categories/>
            <Newsletter/>
        </div>
    );
};

export default Home;