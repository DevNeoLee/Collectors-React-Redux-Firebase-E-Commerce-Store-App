import React from 'react'

import categoryItemStyle from './categoryItem.module.scss'

const CategoryItem = ({ name}) => {

    return (
        <div className={categoryItemStyle.id}>
            <h3 className={categoryItemStyle.title}> {name.toUpperCase()}</h3>
            {/* <img src={require('/media-images/animation/cowboy.jpg')} /> */}
             {/* <img src={require('/logo.png')} /> */}
            {/* <img src="./media-images/animation/batman.jpg" alt="" width="100px" height="100"/> */}
        </div>
    )
}

export default CategoryItem

