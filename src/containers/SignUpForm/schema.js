import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email address')
    .strict(false)
    .trim()
    .email()
    .required('Email address required'),
  password: yup
    .string()
    .label('Password')
    .min(8)
    .max(120)
    .required('Password required'),
  firstName: yup
    .string()
    .label('First Name')
    .strict(false)
    .trim()
    .required('First name required'),
  lastName: yup
    .string()
    .label('Last Name')
    .strict(false)
    .trim()
    .required('Last name required'),
});
