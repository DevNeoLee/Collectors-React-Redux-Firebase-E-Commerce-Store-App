import React from 'react';

import Product from '../../components/product/product';

import productpageStyle from './productpage.module.scss';

const Productpage = ({ item }) => (
  <div className={productpageStyle.productpage} >
    this is from Productpage!
    <div className={productpageStyle.vl}></div>
    <Product item= { item }/>
  </div>
);

export default Productpage;
