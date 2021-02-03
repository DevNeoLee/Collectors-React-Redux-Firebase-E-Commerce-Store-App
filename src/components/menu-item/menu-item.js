
import React from 'react'
import menuStyle from './menu-item.module.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => {
  return(
  <div className={menuStyle.menu}
    onClick={()=> history.push(`${match.url}${linkUrl}`)}
  >
    <div className={menuStyle.content}>
      <h1 className={menuStyle.title}>{title}</h1>
      <span className={menuStyle.button}>SHOP NOW</span>
    </div>
  </div>
)};

export default withRouter(MenuItem);
