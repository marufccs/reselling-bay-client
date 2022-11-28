import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({price, data}) => {
  const {_id, userName, userEmail} = data;
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json"
      },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret)
        });
    }, [price]);


    const handleSubmit = async(event) => {
      event.preventDefault();
      if(!stripe || !elements){
        return
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }

      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log(error);
        setCardError(error.message)
      } else {
        setCardError('');
      }
      setSuccess('');
      setProcessing(true);

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: userEmail
            },
          },
        },
      );

      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      if(paymentIntent.status === "succeeded"){
        setSuccess('Congratulations! Your payment has been completed');
        setTransactionId(paymentIntent.id);
        const payment = {
          price,
          transactionId: paymentIntent.id,
          userEmail,
          bookingId: _id
      }
      fetch('http://localhost:5000/payments', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(payment)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if (data.insertedId) {
                  setSuccess('Congrats! your payment completed');
                  setTransactionId(paymentIntent.id);
              }
          })
      }
      setProcessing(false);
    };
    

    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-accent mt-6 text-white' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      <p className='text-red-500'> {cardError}</p>
      {
                success && <div>
                    <p className='font-2xl mt-3 text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
       </>
    );
};

export default CheckOutForm;