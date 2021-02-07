 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import headerStyle from './header.module.scss';
import logo from '../../logoBoxMain.svg';
import toggleMenu from '../../favicon7.svg';

import { auth } from '../../firebase/utils';
import CartHeader from '../cart-header/cart-header';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
 
const Header = ({ currentUser, hidden }) => {

  //toggleMenu to be appeared screen width less than 820px
  const [ isOpen, setIsOpen ] = useState(false);

  const dropMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  //clickOutside of the menu, closing the toggle menu
  useEffect(() => toggleEventListener(), [isOpen]);

    const toggleEventListener = () => {
        if (!isOpen) {
            document.removeEventListener('click', dropMenu );
        } else {
            document.addEventListener('click', dropMenu );
        }
    };


  return (
  <div className={headerStyle.header} >
    <div className={headerStyle.main}>
      <div className={headerStyle.logo}><Link to="/"><img src={ logo } alt="logo" width={250}/></Link></div>
      <div className={headerStyle.menu}>
        <div className={headerStyle.links}>
          <div className={headerStyle.link}><Link to="/shop/movie"><p>Movie</p></Link></div>
          <div className={headerStyle.link}><Link to="/shop/animation">Animation</Link></div>
          <div className={headerStyle.link}><Link to="/shop/tvseries">TV<br/>Series</Link></div>
          <div className={headerStyle.link}><Link to="/shop/sportsart">Sports<br/>/Art</Link></div>
          <div className={headerStyle.link}><Link to="/shop/rarecollection">Rare<br/>Collection</Link></div>
          { currentUser ? 
            <div onClick={() => auth.signOut() } className={headerStyle.link}>Log out</div>
            : 
            <div className={`${headerStyle.link} ${headerStyle.login}`}><Link to="/login">Log in<br/>/Sign Up</Link></div>
          }  
        </div>
      </div>  
      <div>
        <div className={headerStyle.toggleMenu} onClick={ ()=> dropMenu()} >
          <img className={ headerStyle.image } src={toggleMenu} alt="" width={50}/>
        </div>
        <div className={ `${headerStyle.menudown} ${isOpen ? headerStyle.toggle : headerStyle.close}` }>
          <div className={headerStyle.list}>
            <div className={headerStyle.link}><Link to="/shop/movie"><p>Movie</p></Link></div>
            <div className={headerStyle.link}><Link to="/shop/animation">Animation</Link></div>
            <div className={headerStyle.link}><Link to="/shop/tvseries">TV<br/>Series</Link></div>
            <div className={headerStyle.link}><Link to="/shop/sportsart">Sports<br/>/Art</Link></div>
            <div className={headerStyle.link}><Link to="/shop/rarecollection">Rare<br/>Collection</Link></div>
            { currentUser ? 
              <div onClick={() => auth.signOut() } className={headerStyle.link}>Log out</div>
              : 
              <div className={`${headerStyle.link} ${headerStyle.login}`}><Link to="/login">Log in<br/>/Sign Up</Link></div>
            }  
          </div>
        </div>

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

}
 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
