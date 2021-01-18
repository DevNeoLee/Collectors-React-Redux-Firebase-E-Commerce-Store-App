import React from 'react'

import CategoryItem from '../categoryItem/categoryItem'

import categoryStyle from './category.module.scss'

const Category = ({ items, title }) => {
    return (
        <div className={categoryStyle}>
            <h1 className={categoryStyle.title}> {title.toUpperCase()}</h1>
                <div className={categoryStyle.category}>
                    {items
                    .filter((item, idx) => idx < 4)
                    .map(( item ) => (
                    <CategoryItem key={item.id} item={item} />
                    ))}
                </div>
        </div>
    )
}

export default Category

