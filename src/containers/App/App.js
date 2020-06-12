import React, { useState, useCallback } from 'react';

import { FORM_TYPES } from '../../constants/forms';
import { LoginForm } from '../LoginForm';
import { SignUpForm } from '../SignUpForm';
import { CheckEmailForm } from '../CheckEmailForm';

import { Wrapper } from './App.style';
import bgImage from '../../images/bg.png';

const style = {
  backgroundImage: `url(${bgImage})`,
}

const forms = {
  [FORM_TYPES.login]: LoginForm,
  [FORM_TYPES.signUp]: SignUpForm,
  [FORM_TYPES.checkEmail]: CheckEmailForm,
}

const App = () => {

  const [formType, setFormType] = useState(FORM_TYPES.login);

  const onClick = useCallback((type) => () => {
    setFormType(type);
  }, [setFormType])

  const AuthForm = forms[formType];

  return (
    <Wrapper data-testid="app-wrapper" style={style}>
      <div className="mask" />
      <div className="action-buttons">
        <button className="action" onClick={onClick(FORM_TYPES.login)}>Login</button>
        <button className="action" onClick={onClick(FORM_TYPES.signUp)}>Sign Up</button>
      </div>
      <AuthForm onChangeFormType={setFormType} />
    </Wrapper>
  );
}

export default App;
export { App };
