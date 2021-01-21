import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IC9NUCGH3J5zlreOUzJFUzamgpd2AdVaPj5dD7xi4Hol5EJVZmLlfZScIgzgbSa32Sx9ip1bogC7vdbQAfRc4bZ003GcR1sKr";

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };
    console.log(price)
  return (
    <StripeCheckout
      label='Pay Now'
      name='Collectors'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;