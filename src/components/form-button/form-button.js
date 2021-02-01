
import React from 'react'
import googleLogo from '../../logoGoogle.png'

import formButtonStyle from './form-button.module.scss'

const FormButton = ({ children, isGoogle, isProduct, ...otherProps }) => (
  <button  className={`${formButtonStyle.button} ${isProduct ? formButtonStyle.isProduct : "" } ${isGoogle ? formButtonStyle.isGoogle : "" }`} {...otherProps}>
    <div>{children} </div>{ isGoogle ? <img src={googleLogo} alt="google-logo" className={formButtonStyle.googleLogo}/> : "" }
  </button>
);

export default FormButton;
