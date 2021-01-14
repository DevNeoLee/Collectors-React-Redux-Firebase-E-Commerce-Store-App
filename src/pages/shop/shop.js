import React, { Component } from 'react'
import SHOP_DATA from './shop.data.js'

import Category from '../../components/category/category'

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

            <div>
                { collections.map(({id, ...otherItems})=>(
                    <Category key={id} {...otherItems} />
                ))}
            </div>
        )
    }
}
