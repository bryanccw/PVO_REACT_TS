import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  userName: yup.string().required('auth.errors.username.required'),
  password: yup.string().required('auth.errors.password.required'),
});

export const ForgotPasswordSchema = yup.object().shape({
  userName: yup.string().required('auth.errors.username.required'),
  email: yup.string().email('auth.errors.email.format').required('auth.errors.email.required'),
});
