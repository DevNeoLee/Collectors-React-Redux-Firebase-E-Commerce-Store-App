import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Category from '../../components/category/category';

import { selectCollections } from '../../redux/shop/shop-selectors';

import shoppageStyle from './shoppage.module.scss';

const Shoppage = ({ collections }) => {
        return (

            <div className={shoppageStyle.container}>
                { collections.map(({id, ...otherItems})=>(
                    <Category key={id} {...otherItems} />
                ))}
            </div>
        )

}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(Shoppage);
