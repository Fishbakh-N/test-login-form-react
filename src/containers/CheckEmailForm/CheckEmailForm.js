import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';

import { FORM_TYPES } from '../../constants/forms';
import { AuthForm } from '../../components/AuthForm';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { checkEmailSchema } from './schema';

const initValues = {
  code: '',
}

const CheckEmailForm = ({ onChangeFormType }) => {

  const onSubmit = useCallback((values) => {
    console.log('LoginForm: ', { values });
  }, []);

  const onClickBack = useCallback((event) => {
    event.preventDefault();
    onChangeFormType(FORM_TYPES.signUp);
  }, [onChangeFormType]);

  return (
    <AuthForm title="Check your email">
      <div className="check-info">
        <span>Enter the verification code we sent to your email</span>
      </div>
      <Formik
        enableReinitialize
        initialValues={initValues}
        onSubmit={onSubmit}
        validationSchema={checkEmailSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ setFieldError }) => (
          <Form>
            <Field name="code">
              {(fieldProps) => (
                <Input {...fieldProps} placeholder="Enter code" />
              )}
            </Field>
            <Button title="Verify" onClick={() => setFieldError('code', 'Invalid Code')} />
          </Form>
        )}
      </Formik>
      <div className="links">
        <a href="#" className="back" onClick={onClickBack}>
          <i className="ion-android-arrow-back" />
          <span>Back</span>
        </a>
        <a href="#" className="resend">
          <i className="ion-android-sync" />
          <span>Resend Code</span>
        </a>
      </div>
    </AuthForm>
  );
};

export default CheckEmailForm;
export { CheckEmailForm };
