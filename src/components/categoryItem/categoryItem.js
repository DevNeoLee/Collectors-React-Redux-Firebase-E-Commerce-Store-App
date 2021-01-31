import React from 'react'
import { connect } from 'react-redux'

import categoryItemStyle from './categoryItem.module.scss'
import FormButton from '../form-button/form-button'
import { addProduct } from '../../redux/cart/cart-actions'

const CategoryItem = ( { item, addProduct } ) => {
    
    const { name, price, imageUrl } = item

    return (
        <div className={categoryItemStyle.container}>
            <h3 className={categoryItemStyle.title}> { name.toUpperCase() }</h3>
            <img src={imageUrl} alt="" width="200" />
            <p className={categoryItemStyle.price}>$ { price }</p>
            <FormButton onClick={ () => addProduct(item)}> Collect This </FormButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (item) => dispatch(addProduct(item))
})

export default connect(null, mapDispatchToProps)(CategoryItem)

