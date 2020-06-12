import React, { useState, useCallback } from 'react';
import { Wrapper } from './Password.style';

const Password = ({ field, form, placeholder }) => {

  const [showPass, setShowPass] = useState(false);

  const onShowPass = useCallback(() => {
    setShowPass(!showPass);
  }, [showPass, setShowPass])

  const { errors } = form;
  const { name, value, onChange } = field;

  const showError = (errors && !!errors[name]);
  const className = showError ? 'text-input error' : 'text-input';
  const inputType = showPass ? 'text' : 'password';
  const btnTitle = showPass ? 'Hide' : 'Show';

  return (
    <Wrapper className="form-input">
      <input
        type={inputType}
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="show-pass" onClick={onShowPass}>{btnTitle}</div>
      {showError && (
        <div className="error-message">{errors[name]}</div>
      )}
    </Wrapper>
  );
};

export default Password;
export { Password };
