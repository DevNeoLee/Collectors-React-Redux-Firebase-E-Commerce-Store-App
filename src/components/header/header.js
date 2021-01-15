
import React from 'react'
import { Link } from 'react-router-dom';

import headerStyle from './header.module.scss'
import logo from '../../logo.png'

const Header = ({ }) => (
  <div className={headerStyle.header} >
        <div className={headerStyle.logo}><Link to="/"><img src={ logo } alt="logo" width={200}/></Link></div>
        <div className={headerStyle.links}>
            <div><Link to="/shop">Shop</Link></div>
            <div><Link to="/">About</Link></div>
        </div>
  </div>
);

export default Header;
