import React, { useEffect } from 'react';
import { withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import checkoutPageStyle from './checkoutpage.module.scss'
import { selectCartProducts, selectCartTotal, selectCartProductsCount } from '../../redux/cart/cart-selectors';

import CheckoutProduct from '../../components/checkout-product/checkout-product'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const CheckoutPage = ({ cartProducts, total, cartCount, history })=> {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

     return (
        <div className={checkoutPageStyle.main}>
            <div className={checkoutPageStyle.header}>
                <h1>Shopping Cart </h1>
                <hr/>
                <div className={checkoutPageStyle.products}>
                    {
                        cartProducts.map(product =>        
                            < CheckoutProduct key={product.id} product={product} />)
                    }
                    { (cartProducts.length) === 0 ? 
                        (<div className={checkoutPageStyle.empty}><p>Cart is Empty</p></div>): ""
                    }
                </div>
            </div>
            <div className={checkoutPageStyle.summaryContainer}>
                <div className={checkoutPageStyle.summary}>
                    <div className={checkoutPageStyle.total}>
                        SubTotal <div className={checkoutPageStyle.cartCount}>( {cartCount} item{ cartCount < 2 ? "" : "s"} ) </div>
                        <div className={checkoutPageStyle.totalNumber}>$ {total}</div>
                    </div>
                    <div className={checkoutPageStyle.stripeButton}><StripeCheckoutButton price={total}/></div>
                </div>
            </div>
            <div className={checkoutPageStyle.testCreditcard}>
                <div className={checkoutPageStyle.ccContainer}>
                    <p className={checkoutPageStyle.testWarning}>* Please Feel Free to Use the Following Number for Your Test Payment *</p>
                    <p className={checkoutPageStyle.testNumber}>4242 4242 4242 4242 - Exp: 01/25 - CVV: 123</p>                
                </div>
            </div>
        </div>
     );   
};

const mapStateToProps = createStructuredSelector({
  cartProducts: selectCartProducts,
  total: selectCartTotal,
  cartCount: selectCartProductsCount

});

export default connect(mapStateToProps)(withRouter(CheckoutPage));

