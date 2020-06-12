import * as yup from 'yup';

export const checkEmailSchema = yup.object().shape({
  code: yup
    .string()
    .label('Code')
    .strict(false)
    .trim()
    .required(),
});
