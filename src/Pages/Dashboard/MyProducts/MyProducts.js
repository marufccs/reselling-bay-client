import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../../Shared/Loader/Loader';
import { AuthContext } from '../../../UserContext/UserContext';
import MyProduct from './MyProduct';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

      const { data: myProducts = [], isLoading} = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://used-products-resale-market-server-eight.vercel.app/allBooks?sellerName=${user.displayName}`);
            const data = await res.json();
            return data
        }
    })
    console.log(myProducts);

    if(isLoading){
        return <Loader/>
    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:ml-48 sm:ml-20 mt-20'>
            {
                myProducts.map(myProduct => <MyProduct key={myProduct._id} myProduct={myProduct}></MyProduct> )
            }
        </div>
    );
};

export default MyProducts;