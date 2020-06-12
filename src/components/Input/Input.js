import React from 'react';
import { Wrapper } from './Input.style';

const Input = ({ field, form, placeholder }) => {

  const { errors } = form;
  const { name, value, onChange } = field;

  const showError = (errors && !!errors[name]);
  const className = showError ? 'text-input error' : 'text-input';

  return (
    <Wrapper className="form-input">
      <input
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {showError && (
        <div className="error-message">{errors[name]}</div>
      )}
    </Wrapper>
  );
};

export default Input;
export { Input };
