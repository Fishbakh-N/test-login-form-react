import React from 'react';
import { Wrapper } from './AuthForm.style';

const AuthForm = ({ title, children }) => {

  return (
    <Wrapper>
      <i className="ion-android-close" />
      <h4>{title}</h4>
      <div className="content">
        {children}
      </div>
    </Wrapper>
  );
};

export default AuthForm;
export { AuthForm };
