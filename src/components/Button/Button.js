import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ title, onClick, ...restProps }) => {

  return (
    <StyledButton onClick={onClick} {...restProps}>
      {title}
    </StyledButton>
  );
};

export default Button;
export { Button };
