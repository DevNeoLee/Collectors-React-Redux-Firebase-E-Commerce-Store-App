import React from 'react';

import { Link } from 'react-router-dom';

import productStyle from './product.module.scss';

const Product = () => {

    return (
        <div className={productStyle.container}>
          <div>      
            <Link to="/"><img src="" alt="" width={400}/></Link>
          </div>
        </div>
    );
}

export default Product;

