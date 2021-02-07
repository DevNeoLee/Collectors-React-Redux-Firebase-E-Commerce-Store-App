import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import backgroundImage from '../../favicon7.svg';

import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartHidden, selectCartProductsCount } from '../../redux/cart/cart-selectors';

import cartHeaderStyle from './cart-header.module.scss';
import { GiShoppingCart } from 'react-icons/gi';

const CartHeader = ({ toggleHidden, productCount, hidden }) => {
      
    useEffect(() => toggleEventListener(), [hidden]);

    const toggleEventListener = () => {
        if (hidden) {
            document.removeEventListener('click', toggleHidden );
        } else {
            document.addEventListener('click', toggleHidden );
        }
    };

    return (
            <Link to="/checkout">
                <div className={ cartHeaderStyle.container} onMouseEnter={toggleHidden}>
                    <div className={ cartHeaderStyle.icon }><GiShoppingCart size={30}/></div>
                    <div className={ cartHeaderStyle.countContainer}>
                        <div className={ cartHeaderStyle.number}>{productCount}</div>
                        <img className={ cartHeaderStyle.image } src={backgroundImage}/>
                    </div>
                </div>
            </Link>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleCartHidden())
 });

const mapStateToProps = createStructuredSelector({
    productCount: selectCartProductsCount,
    hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CartHeader);

