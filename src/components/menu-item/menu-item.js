
import React from 'react'
import menuStyle from './menu-item.module.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
    console.log(history);
  return(
  <div className={menuStyle.menu}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
  >
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)};

export default withRouter(MenuItem);
