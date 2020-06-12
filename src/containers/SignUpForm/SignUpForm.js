import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';

import { FORM_TYPES } from '../../constants/forms';
import { AuthForm } from '../../components/AuthForm';
import { Input } from '../../components/Input';
import { Password } from '../../components/Password';
import { Button } from '../../components/Button';
import { SocialButtons } from '../../components/SocialButtons';

import { signUpSchema } from './schema';

const initValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  remember: false,
}

const SignUpForm = ({ onChangeFormType }) => {

  const onSubmit = useCallback((values) => {
    console.log('SignUpForm: ', { values });
    onChangeFormType(FORM_TYPES.checkEmail);
  }, [onChangeFormType]);

  const onClickLink = useCallback((event) => {
    event.preventDefault();
    onChangeFormType(FORM_TYPES.login);
  }, [onChangeFormType]);

  return (
    <AuthForm title="Sign Up">
      <Formik
        enableReinitialize
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {() => (
          <Form>
            <div className="names">
              <Field name="firstName">
                {(fieldProps) => (
                  <Input {...fieldProps} placeholder="First Name" />
                )}
              </Field>
              <Field name="lastName">
                {(fieldProps) => (
                  <Input {...fieldProps} placeholder="Last Name" />
                )}
              </Field>
            </div>
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
            <Button title="Sign Up" type="submit" />
          </Form>
        )}
      </Formik>
      <SocialButtons />
      <div className="footer">
        <span>Already have an account?</span>
        <a href="#" onClick={onClickLink}>Login</a>
      </div>
    </AuthForm>
  );
};

export default SignUpForm;
export { SignUpForm };
