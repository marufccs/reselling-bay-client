
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPES_PK);
console.log(stripePromise);

const Payment = () => {
    const data = useLoaderData();
    const price = data.bookPrice.slice(1,)
    const {bookName, userName} = data;
    return (
        <div>
            <div>
                <h3 className='text-3xl font-xl mt-3'>Hey there {userName}</h3>
                <p className='text-xl mt-6'>You're almost there. Now please pay <strong>€{price}</strong> to purchase <strong>{bookName}</strong></p>
            </div>
            <div className='mt-12 w-96'>
            <Elements stripe={stripePromise}>
      <CheckOutForm price={price} data={data}/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;