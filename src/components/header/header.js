 
import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import headerStyle from './header.module.scss'
import logo from '../../logo.png'

import { auth } from '../../firebase/utils'
import CartHeader from '../cart-header/cart-header'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
 
const Header = ({ currentUser, hidden }) => (
  <div className={headerStyle.header} >
    <div className={headerStyle.main}>
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
          <div>
            <CartHeader />
            {
              hidden ? null :
                <CartDropdown />
            }
          </div>
    </div>
    
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
