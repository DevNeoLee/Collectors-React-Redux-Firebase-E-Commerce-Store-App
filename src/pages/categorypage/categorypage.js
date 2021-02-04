
import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../../components/categoryItem/categoryItem';

import { selectCategory } from '../../redux/shop/shop-selectors';

import categorypageStyle from './categorypage.module.scss';

const Categorypage = ({ categoryCollection }) => {
     if (!categoryCollection ) {
            return (<div>I am sorry there is no such page</div>);
        }
        
    const { title, subtitle } = categoryCollection;
    return (
        <div className={categorypageStyle.categorypage}>
            <div className={categorypageStyle.titleContainer}>
                <h1 className={categorypageStyle.title}> {title}</h1>
                <h3 className={categorypageStyle.subtitle}> {subtitle}</h3>                
            </div> 
            <div className={categorypageStyle.productContainer}>
                {/* <div className={categorypageStyle.category}></div> */}
                { categoryCollection.items.map(item=> 
                    <CategoryItem item={ item } key={ item.id }/>
                ) }
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    categoryCollection: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Categorypage);