
import React from 'react'

import formButtonStyle from './form-button.module.scss'

const FormButton = ({ children, ...otherProps }) => (
  <button className={formButtonStyle.button} {...otherProps}>
    {children}
  </button>
);

export default FormButton;
