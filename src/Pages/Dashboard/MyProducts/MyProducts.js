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
            const res = await fetch(`http://localhost:5000/allBooks?sellerName=${user.displayName}`);
            const data = await res.json();
            return data
        }
    })
    console.log(myProducts);

    if(isLoading){
        return <Loader/>
    }
    return (
        <div>
            {
                myProducts.map(myProduct => <MyProduct key={myProduct._id} myProduct={myProduct}></MyProduct> )
            }
        </div>
    );
};

export default MyProducts;