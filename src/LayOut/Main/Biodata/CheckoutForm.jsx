import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useBiodata from '../../../Hooks/useBiodata';


const CheckoutForm = ({ biodataId }) => {
  const { user } = useAuth()
  const [error, setError] = useState()
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const navigate=useNavigate()
  const location=useLocation()
  const totalPrice = 5
  const [clientSecret, setClientSecret] = useState()
  const [transactionId, setTransactionId] = useState()
  const from = location.state?.from?.pathname || '/biodata'
  const [biodata]=useBiodata()
  const infoFor=biodata?.find(bio=>bio.biodataId===biodataId)


  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        // console.log(res.data)
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosSecure])

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
    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if (confirmError) {
      console.log('confirm error')
    }
    else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc date convert. use moment js to 
          biodataId: biodataId,
          status: 'pending'
        }

        axiosPublic.post('contact-req', payment)
        .then(res => {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Request successfully Submited",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            }
        })

      }

    }
  }
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
        {
          transactionId && <h1 className='text-2xl text-red-400'>your transaction Id : {transactionId}</h1>
        }
      </form>
    </div>

  );
};

export default CheckoutForm;