import React from 'react'

import categoryItemStyle from './categoryItem.module.scss'

const CategoryItem = ({ name}) => {

    return (
        <div className={categoryItemStyle.id}>
            <h1 className={categoryItemStyle.title}> {name.toUpperCase()}</h1>
          
        </div>
    )
}

export default CategoryItem

