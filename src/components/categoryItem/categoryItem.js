import React from 'react'

import categoryItemStyle from './categoryItem.module.scss'
import FormButton from '../form-button/form-button'

const CategoryItem = ( { name, imageUrl, price} ) => {

    return (
        <div className={categoryItemStyle.container}>
            <h3 className={categoryItemStyle.title}> { name.toUpperCase() }</h3>
            <img src={imageUrl} alt="" width="200" />
            <p className={categoryItemStyle.price}>Price: $ { price }</p>
            <FormButton type='submit'> Collect This </FormButton>
        </div>
    )
}

export default CategoryItem

