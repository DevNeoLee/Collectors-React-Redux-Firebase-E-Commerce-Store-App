import React from 'react';
import { Link } from 'react-router-dom';

import CategoryItem from '../categoryItem/categoryItem'

import categoryStyle from './category.module.scss'

const Category = ({ items, title, routeName, subtitle }) => {
    return (
        <div className={categoryStyle.categoryContainer}>
            <Link to={`/shop/${routeName}`}>
                <div className={categoryStyle.titleContainer}>
                    <h1 className={categoryStyle.title}> {title}</h1>
                    <h3 className={categoryStyle.subtitle}> {subtitle}</h3>                
                </div> 
            </Link>
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

