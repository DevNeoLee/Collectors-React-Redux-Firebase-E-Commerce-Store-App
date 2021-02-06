import React from 'react';

import { Link } from 'react-router-dom';

import footerStyle from './footer.module.scss';
import logo from '../../logoBox.svg'

const footer = () => {

    return (
        <div className={footerStyle.container}>
          <div className={footerStyle.logoContainer}>   
            <div className={footerStyle.logo}><Link to="/"><img src={ logo } alt="logo"/></Link><small>&copy; 2021</small></div>
          </div>
          <div className={footerStyle.listContainer}>
            <div>
              <h4>Features</h4>
              <ul>
                  <li>Shopping Cart with Redux Cart Data</li>
                  <li>Checkout Payment with Stripe</li>
                  <li>Shop Page with Redux Product Data</li>
                  <li>Backend Service with Firebase</li>
                  <li>Login with Google Auth and Redux User Data</li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul>
                <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                <li><div>Favicon by Larea from the Noun Project</div></li>
                <li><div>Logo is mady by https://logomakr.com/7JGBSf</div></li>
                <li></li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li><div><a href="https://devneolee.github.io/justinklee/" target="_blank"><span>© Justin K Lee </span></a></div></li>
                <li><a target="_blank" href="https://github.com/devneoLee" ><span>GitHub</span><i></i></a></li>      								       
                <li><a target="_blank" href="https://www.linkedin.com/in/justinklee215/"><span>LinkedIn</span><i></i></a></li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default footer;

