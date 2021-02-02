
import React from 'react';
import { connect } from 'react-redux';

import checkoutProductStyle from './checkout-product.module.scss';

import { deleteProduct, addProduct, reduceQuantity } from '../../redux/cart/cart-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { fas, faCaretRight, faCaretLeft, faAngleDoubleLeft, faAngleDoubleRight  }  from '@fortawesome/free-solid-svg-icons';

const CheckoutProduct = ({ product, addProduct, deleteProduct, reduceQuantity }) => {
    if (product) {
        return  (<div className={checkoutProductStyle.container}>
                    <div className={checkoutProductStyle.checkoutProduct}>
                        <div className={checkoutProductStyle.imageContainer}><img className={checkoutProductStyle.image} src={product.imageUrl} alt="img"/></div>
                        <div className={checkoutProductStyle.detail}>
                            <div className={checkoutProductStyle.titlePrice}>
                                <h2>{product.name}</h2>
                                <div className={checkoutProductStyle.price}><div className={checkoutProductStyle.priceText}>Price </div>${product.price}</div>
                            </div>
                            <div className={checkoutProductStyle.description}><p>+Description+this is the details......currently empty</p></div>
                            <div className={checkoutProductStyle.quantityDelete}>
                                <div className={checkoutProductStyle.quantityText}>Quantity: 
                                    <div onClick={() => reduceQuantity(product) }>
                                        <FontAwesomeIcon icon={ fas, faAngleDoubleLeft } className={checkoutProductStyle.icon} size="1x" />
                                    </div>
                                    <div className={checkoutProductStyle.quantity}>
                                        {product.quantity}
                                    </div>
                                    <div onClick={() => addProduct(product)}>
                                        <FontAwesomeIcon icon={ fas, faAngleDoubleRight } className={checkoutProductStyle.icon} size="1.5x" />
                                    </div>
                                </div>
                                <div className={checkoutProductStyle.delete}>Delete: 
                                    <p onClick={()=> deleteProduct(product) } className={checkoutProductStyle.x}>
                                        &#10005;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
      
    )}
}

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: product => dispatch(deleteProduct(product)),
    addProduct: product => dispatch(addProduct(product)),
    reduceQuantity: product => dispatch(reduceQuantity(product))
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
