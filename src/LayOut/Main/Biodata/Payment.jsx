import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise=loadStripe(import.meta.env.VITE_Strip_Payment_KEY)
const Payment = () => {
    return (
        <Elements stripe={stripePromise} >
          <CheckoutForm/>
      </Elements>
    );
};

export default Payment;