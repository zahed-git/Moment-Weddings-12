import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure'


const CheckoutForm = () => {

  const [error, setError] = useState()
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure =useAxiosSecure()
  const price= 5
  const [clientSecret,setClientSecret]=useState()

useEffect(()=>{
 axiosSecure.post('/create-payment-intent',price)
 .then(res=>{
  console.log(res.data)
  setClientSecret(res.data.clientSecret)
 })
},[axiosSecure,price])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }
  };

  return (
    <div className=''>
      <h2 className='text-white mb-14'>.</h2>
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
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className='text-red-500'>{error}</p>
      </form>
    </div>

  );
};

export default CheckoutForm;