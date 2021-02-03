import React from 'react';

import { Link } from 'react-router-dom';

import productStyle from './product.module.scss';
import logo from '../../logoMain.png'

const Product = () => {

    return (
        <div className={productStyle.container}>
          <div>
            <a href=""></a>       
            <Link to="/"><img src={ logo } alt="logo" width={400}/></Link>
            <small>&copy; 2020</small>
          </div>
        </div>
    );
}

export default Product;

