import React from 'react'

import categoryItemStyle from './categoryItem.module.scss'

const CategoryItem = ( { name, imageUrl, price} ) => {
    console.log(imageUrl)
    return (
        <div className={categoryItemStyle.id}>
            <h3 className={categoryItemStyle.title}> { name.toUpperCase() }</h3>
            <img src={imageUrl} alt="" width="200" />
            <p>Price: $ { price }</p>
        </div>
    )
}

export default CategoryItem

