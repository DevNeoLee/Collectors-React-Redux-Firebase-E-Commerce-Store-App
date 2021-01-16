
import React from 'react'

import formInputStyle from './form-input.module.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className={formInputStyle.group}>
    <input className={formInputStyle.input} onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={ 
          otherProps.value.length ? (formInputStyle.shrink, formInputStyle.label) : formInputStyle.label}
 
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
