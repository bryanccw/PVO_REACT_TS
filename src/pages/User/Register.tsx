/* eslint-disable */
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
  DropDown,
  Notification,
  FormWrapper,
} from '../../ui/components';
import { doRegister } from '../../ui/utils/auth';
// import { formatDate } from '../../ui/utils/helper';
import type { UserModel, MasterCityModel, MasterStateModel, DynamicObjectInterface } from '../../sdk/type';
import { UserInputSchema } from '../../sdk/validations/registrationSchema';
import geoService from '../../sdk/services/geoService';

export const Register = () => {
  const { t } = useTranslation();
  const { addToast } = useToast();

  const [isLoading, setLoading] = useState(false);

  const [states, setStates] = useState<MasterStateModel[]>([]);
  const [cities, setCities] = useState<MasterCityModel[]>([]);

  const [selectedState, setSelectedState] = useState<MasterStateModel>();

  const validationSchema = UserInputSchema(true);

  const initialValues: UserModel = {
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
    // dob: '',
    // state: '',
    // city: '',
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    setLoading(true);
    geoService.getStates().then(res => {
      setLoading(false);
      setStates(
        res.data
          .map((row: DynamicObjectInterface) => {
            row.value = row.code;
            row.label = row.state;
            return row;
          })
          .sort((a: DynamicObjectInterface, b: DynamicObjectInterface) => a.label.localeCompare(b.label)),
      );
    });
  }, []);

  const handleStateChanged = (state?: string) => {
    if (state) {
      setLoading(true);
      geoService.getCityByState(state).then(res => {
        setLoading(false);
        setCities(
          res.data
            .map((label: string) => {
              let row = {
                value: label,
                label: label,
              };

              return row;
            })
            .sort((a: DynamicObjectInterface, b: DynamicObjectInterface) => a.label.localeCompare(b.label)),
        );
      });
    }
  };

  const doRegisterBtn = async (values: UserModel) => {
    setLoading(true);

    // values.state = selectedState?.code;

    let res = await doRegister(values);
    if (res) {
      setLoading(false);

      addToast({
        id: 'reg_success',
        content: <Notification message={'User registered successfully, please proceed to login.'} />,
        topPosition: '20px',
      });

      setTimeout(() => {
        window.location.href = '/auth/login';
      }, 2000);
    }
  };

  return (
    <Page>
      <FormWrapper caption={t('auth.userRegistration')}>
        <Formik
          initialValues={initialValues}
          onSubmit={doRegisterBtn}
          validationSchema={validationSchema}
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
                  <Field type="password" name="confirmPassword">
                    {({ meta }: FieldProps) => (
                      <>
                        <Input
                          label={t('auth.confirmPassword')}
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={values?.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorComponent touched={meta.touched} error={meta.error} />
                      </>
                    )}
                  </Field>
                </FieldWrapper>

                <FieldWrapper>
                  <Field type="text" name="name">
                    {({ meta }: FieldProps) => (
                      <>
                        <Input
                          label={t('auth.name')}
                          id="name"
                          name="name"
                          value={values?.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorComponent touched={meta.touched} error={meta.error} />
                      </>
                    )}
                  </Field>
                </FieldWrapper>

                <FieldWrapper>
                  <Field type="email" name="email">
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

                {/* <FieldWrapper>
                  <Field type="date" name="dob">
                    {({ meta }: FieldProps) => (
                      <>
                        <Input
                          label={t('auth.birthdate')}
                          id="dob"
                          name="dob"
                          type="date"
                          value={formatDate(values?.dob || '')}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorComponent touched={meta.touched} error={meta.error} />
                      </>
                    )}
                  </Field>
                </FieldWrapper> */}

                {/* <FieldWrapper>
                  <Field type="text" name="state">
                    {({ meta }: FieldProps) => (
                      <>
                        <DropDown
                          dropdownLabel={t('auth.state')}
                          id="state"
                          name="state"
                          value={values?.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabledFilter={true}
                          data={states}
                          configData={{
                            label: 'label',
                            onSelect: (state: DynamicObjectInterface) => {
                              setFieldValue('state', state.label);
                              setSelectedState(state);
                              handleStateChanged(state.value);
                            },
                          }}
                        />
                        <ErrorComponent touched={meta.touched} error={meta.error} />
                      </>
                    )}
                  </Field>
                </FieldWrapper> */}

                {/* <FieldWrapper>
                  <Field type="text" name="city">
                    {({ meta }: FieldProps) => (
                      <>
                        <DropDown
                          dropdownLabel={t('auth.city')}
                          id="city"
                          name="city"
                          value={values?.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabledFilter={true}
                          data={cities}
                          configData={{
                            label: 'label',
                            onSelect: (e: DynamicObjectInterface) => setFieldValue('city', e.label),
                          }}
                        />
                        <ErrorComponent touched={meta.touched} error={meta.error} />
                      </>
                    )}
                  </Field>
                </FieldWrapper> */}

                <FieldWrapper>
                  <Button title={t('auth.registerBtn')} disabled={!nextButton} buttonWidth={ButtonWidth.FULL_WIDTH} />
                </FieldWrapper>
              </Form>
            );
          }}
        </Formik>

        <div>
          <a href="/auth/login">{t('auth.login')}</a> | <a href="/auth/forgetPassword">{t('auth.forgotPassword')}</a>
        </div>
      </FormWrapper>
      {isLoading && <Loading />}
    </Page>
  );
};
