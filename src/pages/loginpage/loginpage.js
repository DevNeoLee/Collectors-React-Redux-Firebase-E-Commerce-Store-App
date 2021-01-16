import React from 'react'
import { Link } from 'react-router-dom';

import Login from '../../components/login/login'
import Signup from '../../components/signup/signup'

import loginpageStyle from './loginpage.module.scss'

const Loginpage = () => (
  <div className={loginpageStyle.loginpage} >
    <Login />
    <Signup />
  </div>
);

export default Loginpage;
