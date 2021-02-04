
import React from 'react';
import { connect } from 'react-redux';

import CategoryItem from '../../components/categoryItem/categoryItem';

import { selectCategory } from '../../redux/shop/shop-selectors';

import categorypageStyle from './categorypage.module.scss';

const Categorypage = ({ categoryCollection }) => {
     if (!categoryCollection ) {
            return (<div>I am sorry there is no such page</div>);
        }

    return (
        <div className={categorypageStyle.categorypage}>
            { categoryCollection.items.map(item=> 
               <CategoryItem item={ item } key={ item.id }/>
            ) }
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    categoryCollection: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Categorypage);