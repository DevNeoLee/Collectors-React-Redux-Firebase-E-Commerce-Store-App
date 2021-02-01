import React from 'react';

import { Link } from 'react-router-dom';

import footerStyle from './footer.module.scss';
import logo from '../../logoMain.png'

const footer = () => {

    return (
        <div className={footerStyle.container}>
          <div>
            <a href=""></a>       
            <Link to="/"><img src={ logo } alt="logo" width={400}/></Link>
            <small>&copy; 2020</small>
          </div>
          <div>
            <h5>Features</h5>
            <ul>
                <li>1</li>
                <li>1</li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
                <li>1</li>
                <li>1</li>
            </ul>
          </div>
          <div>
            <h5>About</h5>
            <ul>
                <li>1</li>
                <li>1</li>
            </ul>
          </div>
        </div>
    );
}

export default footer;

