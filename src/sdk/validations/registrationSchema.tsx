import * as yup from 'yup';

export const UserInputSchema = (isNew: boolean) =>
  yup.object().shape({
    userName: isNew
      ? yup.string().required('auth.errors.username.required').min(8, 'auth.errors.username.format')
      : yup.string(),

    password: isNew
      ? yup
          .string()
          .required('auth.errors.password.required')
          .min(8, 'auth.errors.password.format')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'auth.errors.password.rules')
      : yup.string(),

    confirmPassword: yup.string().oneOf([yup.ref('password')], 'auth.errors.password.notMatch'),

    name: yup.string().required('auth.errors.name.required'),
    email: yup.string().email('auth.errors.email.format').required('auth.errors.email.required').nullable(),
    dob: yup
      .date()
      .max(new Date(), 'auth.errors.birthdate.invalidRange')
      .nullable()
      .typeError('auth.errors.birthdate.invalidDate'),

    state: yup.string().nullable(),
    city: yup.string().nullable(),

    phone: yup.string().nullable(),
  });
