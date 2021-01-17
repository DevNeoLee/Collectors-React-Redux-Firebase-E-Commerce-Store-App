
import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import headerStyle from './header.module.scss'
import logo from '../../logo.png'

import { auth } from '../../firebase/utils'

const Header = ({ currentUser }) => (
  <div className={headerStyle.header} >
        <div className={headerStyle.logo}><Link to="/"><img src={ logo } alt="logo" width={200}/></Link></div>
        <div className={headerStyle.links}>
            <div className={headerStyle.link}><Link to="/shop">Shop</Link></div>
            <div className={headerStyle.link}><Link to="/">About</Link></div>
        </div>
        { currentUser ? 
          <div onClick={() => auth.signOut() } className={headerStyle.link}>Log out</div>
          : 
          <Link to="/login"><div className={headerStyle.link}>Log in</div></Link>
        }
  </div>
);

const mapStateToProps = (state) =>  ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
