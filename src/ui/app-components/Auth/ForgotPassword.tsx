import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Field, FieldProps, Form } from 'formik';
import {
  Page,
  Button,
  Input,
  Loading,
  useToast,
  FieldWrapper,
  ErrorComponent,
  ButtonWidth,
  Notification,
  FormWrapper,
} from '../../components';
import { ForgotPasswordSchema } from '../../../sdk/validations/loginSchema';
import authService from '../../../sdk/services/authService';
import type { UserForgotPasswordModel } from '../../../sdk/type';

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const { addToast } = useToast();

  const [isLoading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // check session
    //let user = localStorage.getItem()
  }, []);

  const getPassBtn = async (values: UserForgotPasswordModel) => {
    setLoading(true);

    if (values.userName && values.email) {
      let res = await authService.forgotPassword(values.userName, values.email);

      setPassword(res.data.user.password);
      setShowPassword(true);
      setLoading(false);
    } else {
      addToast({
        id: 'forgotpassword',
        content: <Notification message={t('auth.errors.noUsernameEmail')} />,
        topPosition: '20px',
      });
      setLoading(false);
    }
  };

  const initialValues: UserForgotPasswordModel = {
    userName: '',
    email: '',
  };

  return (
    <Page>
      {!showPassword && (
        <FormWrapper caption={t('auth.forgotPassword')}>
          <Formik
            initialValues={initialValues}
            onSubmit={getPassBtn}
            validationSchema={ForgotPasswordSchema}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ values, handleChange, handleBlur, isValid, setFieldValue, errors }) => {
              const nextButton = isValid && values.userName && values.email;
              return (
                <Form>
                  <FieldWrapper>
                    <Field type="text" name="userName" validationContext={{ isNew: true }}>
                      {({ meta }: FieldProps) => (
                        <>
                          <Input
                            label={t('auth.username')}
                            id="userName"
                            name="userName"
                            value={values?.userName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorComponent touched={meta.touched} error={meta.error} />
                        </>
                      )}
                    </Field>
                  </FieldWrapper>

                  <FieldWrapper>
                    <Field type="password" name="password">
                      {({ meta }: FieldProps) => (
                        <>
                          <Input
                            label={t('auth.email')}
                            id="email"
                            name="email"
                            type="email"
                            value={values?.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <ErrorComponent touched={meta.touched} error={meta.error} />
                        </>
                      )}
                    </Field>
                  </FieldWrapper>

                  <FieldWrapper>
                    <Button
                      title={t('auth.resetPasswordBtn')}
                      disabled={!nextButton}
                      buttonWidth={ButtonWidth.FULL_WIDTH}
                    />
                  </FieldWrapper>
                </Form>
              );
            }}
          </Formik>
          <div>
            <a href="/auth/login">{t('auth.login')}</a> | <a href="/user/register">{t('auth.register')}</a>
          </div>
        </FormWrapper>
      )}
      {showPassword && (
        <div>
          <div>Your password</div>

          <div>
            <li>simple forgot password for demo purpose</li>
            <li>Password: {password}</li>
          </div>
        </div>
      )}
      {isLoading && <Loading />}
    </Page>
  );
};
