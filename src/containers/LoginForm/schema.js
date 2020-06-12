import * as yup from 'yup';

export const loginSchema = yup.object().shape({
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
});
