import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';


const stripePromise=loadStripe(import.meta.env.VITE_Strip_Payment_KEY)
const Payment = () => {
  const { biodataId } = useParams()
    return (
        <Elements stripe={stripePromise} >
          <CheckoutForm biodataId={biodataId}/>
      </Elements>
    );
};

export default Payment;