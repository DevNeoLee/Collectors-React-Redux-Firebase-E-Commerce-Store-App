
import React from 'react'
import menuStyle from './menu-item.module.scss'

const MenuItem = ({ title, imageUrl }) => (
  <div className={menuStyle.menu}>
    <p>Menu-item</p>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
