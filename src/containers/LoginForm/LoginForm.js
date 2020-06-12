import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';

import { FORM_TYPES } from '../../constants/forms';
import { AuthForm } from '../../components/AuthForm';
import { Input } from '../../components/Input';
import { Password } from '../../components/Password';
import { Checkbox } from '../../components/Checkbox';
import { Button } from '../../components/Button';
import { SocialButtons } from '../../components/SocialButtons';

import { loginSchema } from './schema';

const initValues = {
  email: '',
  password: '',
  remember: false,
}

const LoginForm = ({ onChangeFormType }) => {

  const onSubmit = useCallback((values) => {
    console.log('LoginForm: ', { values });
  }, []);

  const onClickLink = useCallback((event) => {
    event.preventDefault();
    onChangeFormType(FORM_TYPES.signUp);
  }, [onChangeFormType]);

  return (
    <AuthForm title="Login">
      <Formik
        enableReinitialize
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={loginSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {() => (
          <Form>
            <Field name="email">
              {(fieldProps) => (
                <Input {...fieldProps} placeholder="Email address" />
              )}
            </Field>
            <Field name="password">
              {(fieldProps) => (
                <Password {...fieldProps} placeholder="Password" />
              )}
            </Field>
            <Field name="remember">
              {(fieldProps) => (
                <Checkbox {...fieldProps} label="Remember me" />
              )}
            </Field>
            <Button title="Login" type="submit" />
          </Form>
        )}
      </Formik>
      <div className="info">Forgot Password</div>
      <SocialButtons />
      <div className="footer">
        <span>Don't have an account?</span>
        <a href="#" onClick={onClickLink}>Sign Up</a>
      </div>
    </AuthForm>
  );
};

export default LoginForm;
export { LoginForm };
