import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js';

import Category from '../../components/category/category';

import shoppageStyle from './shoppage.module.scss';

export default class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const collections = this.state.collections
        
        return (

            <div className={shoppageStyle.container}>
                { collections.map(({id, ...otherItems})=>(
                    <Category key={id} {...otherItems} />
                ))}
            </div>
        )
    }
}
