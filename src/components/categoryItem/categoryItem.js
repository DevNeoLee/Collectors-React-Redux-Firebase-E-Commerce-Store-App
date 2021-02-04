import React from 'react';
import { connect } from 'react-redux';

import categoryItemStyle from './categoryItem.module.scss';
import FormButton from '../form-button/form-button';
import { addProduct } from '../../redux/cart/cart-actions';

const CategoryItem = ( { item, addProduct } ) => { 
    const { name, price, imageUrl } = item;

    return (
        <div className={categoryItemStyle.card}>
            <div className={categoryItemStyle.imageContainer}><img src={imageUrl} alt="" /></div>
            <div className={categoryItemStyle.title}><h3> { name }</h3></div>
            <p className={categoryItemStyle.price}>$ { price }</p>
            <FormButton onClick={ () => addProduct(item)} isProduct > Add to Cart </FormButton>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (item) => dispatch(addProduct(item))
});

export default connect(null, mapDispatchToProps)(CategoryItem);

