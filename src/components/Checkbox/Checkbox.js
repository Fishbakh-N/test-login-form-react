import React from 'react';
import { Wrapper } from './Checkbox.style';

const Checkbox = ({ field, label }) => {

  const { name, value, onChange } = field;

  return (
    <Wrapper className="form-input">
      <label>
        <input
          type="checkbox"
          className="checkbox"
          name={name}
          value={value}
          onChange={onChange}
        />
        <span>{label}</span>
      </label>
    </Wrapper>
  );
};

export default Checkbox;
export { Checkbox };
