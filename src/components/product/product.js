import React from 'react';

import { Link } from 'react-router-dom';

import productStyle from './product.module.scss';
import logo from '../../logoMain.png'

const Product = ({ item }) => {

    return (
        <div className={productStyle.container}>
          <div>      
            <Link to="/"><img src={ logo } alt="logo" width={400}/></Link>
          </div>
        </div>
    );
}

export default Product;

