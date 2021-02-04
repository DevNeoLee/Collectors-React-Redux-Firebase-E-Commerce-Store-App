import React from 'react';
import { Route } from 'react-router-dom';

import Collections from '../../components/collections/collections'

import Categorypage  from '../categorypage/categorypage'
import Productpage  from '../productpage/productpage'

import shoppageStyle from './shoppage.module.scss';

const Shoppage = ({ match }) => {
        return (
            <div className={shoppageStyle.container}>
                <Route exact path={match.path} component={ Collections } />   
                <Route path={`${match.path}/:categoryId`} component={ Categorypage } />     
            </div>
        )
}

export default Shoppage;
