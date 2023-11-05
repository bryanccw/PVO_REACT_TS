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
import { LoginSchema } from '../../../sdk/validations/loginSchema';
import { doLogin } from '../../utils/auth';
import type { UserLoginModel } from '../../../sdk/type';
import styles from './Login.module.scss';

export const Login = () => {
  const { t } = useTranslation();
  const { addToast } = useToast();

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // check session
    //let user = localStorage.getItem()
  }, []);

  const doLoginBtn = async (values: UserLoginModel) => {
    setLoading(true);

    if (values.userName && values.password) {
      let res = await doLogin(values.userName, values.password);
      setLoading(false);
      if (res) {
        window.location.href = '/';
      }
    } else {
      addToast({
        id: 'login_failed',
        content: <Notification message={t('auth.errors.noUsernamePassword')} />,
        topPosition: '20px',
      });
      setLoading(false);
    }
  };

  const initialValues: UserLoginModel = {
    userName: '',
    password: '',
  };

  return (
    <Page>
      <FormWrapper caption={t('auth.login')} className={styles['login-container']}>
        <Formik
          initialValues={initialValues}
          onSubmit={doLoginBtn}
          validationSchema={LoginSchema}
          validateOnBlur={true}
          validateOnChange={true}
        >
          {({ values, handleChange, handleBlur, isValid, setFieldValue, errors }) => {
            const nextButton = isValid && values.userName && values.password;
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
                          label={t('auth.password')}
                          id="password"
                          name="password"
                          type="password"
                          value={values?.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorComponent touched={meta.touched} error={meta.error} />
                      </>
                    )}
                  </Field>
                </FieldWrapper>

                <FieldWrapper>
                  <Button title={t('auth.loginBtn')} disabled={!nextButton} buttonWidth={ButtonWidth.FULL_WIDTH} />
                </FieldWrapper>
              </Form>
            );
          }}
        </Formik>
        {/* <div>
          <a href="/auth/forgetPassword">{t('auth.forgotPassword')}</a> |{' '}
          <a href="/user/register">{t('auth.register')}</a>
        </div> */}
      </FormWrapper>
      {isLoading && <Loading />}
    </Page>
  );
};
