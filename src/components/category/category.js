import React from 'react'

import CategoryItem from '../categoryItem/categoryItem'

import categoryStyle from './category.module.scss'

const Category = ({ items, title, subtitle }) => {
    return (
        <div className={categoryStyle.categoryContainer}>
            <div className={categoryStyle.titleContainer}>
                <h1 className={categoryStyle.title}> {title}</h1>
                <h3 className={categoryStyle.subtitle}> {subtitle}</h3>                
            </div>
            <div className={categoryStyle.productContainer}>
                <div className={categoryStyle.category}>
                    {items
                    .filter((item, idx) => idx < 4)
                    .map(( item ) => (
                    <CategoryItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category

