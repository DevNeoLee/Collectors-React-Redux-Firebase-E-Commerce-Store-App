import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import shoppageStyle from './shoppage.module.scss';
import Productpage  from '../productpage/productpage'

const Collections = lazy(()=> import('../../components/collections/collections'));
const Categorypage = lazy(()=>import('../categorypage/categorypage'));

const Shoppage = ({ match }) => {
        return (
            <div className={shoppageStyle.container}>
                <Suspense fallback={<div>...loading</div>}>
                    <Route exact path={match.path} component={ Collections } />   
                    <Route path={`${match.path}/:categoryId`} component={ Categorypage } />  
                </Suspense>
                  
            </div>
        )
}

export default Shoppage;
