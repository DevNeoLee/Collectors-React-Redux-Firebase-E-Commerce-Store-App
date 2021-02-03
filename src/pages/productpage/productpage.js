import React from 'react'
import { Link } from 'react-router-dom';

import Product from '../../components/product/product'

import productpageStyle from './productpage.module.scss'

const Productpage = () => (
  <div className={productpageStyle.productpage} >
    <div className={productpageStyle.vl}></div>
    <Product />
  </div>
);

export default Productpage;
