 
import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import headerStyle from './header.module.scss'
import logo from '../../logoMain.png'

import { auth } from '../../firebase/utils'
import CartHeader from '../cart-header/cart-header'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
 
const Header = ({ currentUser, hidden }) => (
  <div className={headerStyle.header} >
    <div className={headerStyle.main}>
      <div className={headerStyle.logo}><Link to="/"><img src={ logo } alt="logo" width={250}/></Link></div>
      <div className={headerStyle.links}>
        {/* <div className={headerStyle.link}><Link to="/shop">Shop</Link></div> */}
        <div className={headerStyle.link}><Link to="/shop/movie">Movie</Link></div>
        <div className={headerStyle.link}><Link to="/shop/animation">Animation</Link></div>
        <div className={headerStyle.link}><Link to="/shop/tvseries">TV-Series</Link></div>
        <div className={headerStyle.link}><Link to="/shop/sportsart">Sports/Art</Link></div>
        <div className={headerStyle.link}><Link to="/shop/rarecollection">Rare Collection</Link></div>
        { currentUser ? 
          <div onClick={() => auth.signOut() } className={headerStyle.link}>Log out</div>
          : 
          <div className={headerStyle.link}><Link to="/login">Log in</Link></div>
        }  
      </div>  
      <div>
        <div className={headerStyle.cartHeader}>
          <CartHeader />
        </div>
        {
          hidden ? null :
          <div className={headerStyle.sticky}>
            <CartDropdown />
          </div>
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
