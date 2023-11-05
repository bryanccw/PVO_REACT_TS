/* eslint-disable */
import { useEffect, useState } from 'react';
import moment from 'moment';
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
import userService from '../../sdk/services/userService';
import branchService from '../../sdk/services/branchService';
import { doLogout } from '../../ui/utils/auth';
import { formatDate } from '../../ui/utils/helper';
import {
  type UserModel,
  type MasterCityModel,
  type MasterStateModel,
  type DynamicObjectInterface,
  BranchModel,
} from '../../sdk/type';
import { UserInputSchema } from '../../sdk/validations/registrationSchema';
import geoService from '../../sdk/services/geoService';

export const Profile = () => {
  const { t } = useTranslation();
  const { addToast } = useToast();

  const initialValues: UserModel = {
    userName: '',
    email: '',
    name: '',
    branch: [],
    role: '',
  };

  const [profile, setProfile] = useState<UserModel>(initialValues);
  const [branches, setBranches] = useState<BranchModel[]>();

  const [isLoading, setLoading] = useState(true);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  const validationSchema = UserInputSchema(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProfile();

    setLoading(true);

    branchService.getBranch().then(res => {
      setLoading(false);
      setBranches(
        res.data
          .map((row: DynamicObjectInterface) => {
            row.value = row.branchCode;
            row.label = row.branchName;
          })
          .sort((a: DynamicObjectInterface, b: DynamicObjectInterface) => a.label.localeCompare(b.label)),
      );
    });
  }, []);

  const handleStateChanged = (state?: string) => {
    // if (state) {
    //   setLoading(true);
    //   geoService.getCityByState(state).then(res => {
    //     setLoading(false);
    //     setCities(
    //       res.data
    //         .map((label: string) => {
    //           let row = {
    //             value: label,
    //             label: label,
    //           };
    //           return row;
    //         })
    //         .sort((a: DynamicObjectInterface, b: DynamicObjectInterface) => a.label.localeCompare(b.label)),
    //     );
    //   });
    // }
  };

  const getProfile = async () => {
    let res = await userService.getProfile();
    if (res.status === 200) {
      setProfile({
        ...profile,
        ...res.data.user,
      });
      setIsProfileLoaded(true);

      // setSelectedState(states?.find(s => s.code === res.data.user.state));
    } else {
      doLogout();
    }
  };

  const doSaveBtn = async (values: UserModel) => {
    setLoading(true);

    // values.state = selectedState?.code;

    let res = await userService.updateProfile(values as UserModel);
    setLoading(false);

    if (res.status === 200 && res.data.acknowledged) {
      await getProfile();

      addToast({
        id: 'profile_success',
        content: <Notification message={'Profile updated!'} />,
        topPosition: '20px',
      });
    } else {
      addToast({
        id: 'profile_failed',
        content: <Notification message={'Profile failed to update!'} />,
        topPosition: '20px',
      });
    }
  };

  return (
    <>
      <Page>
        <FormWrapper caption={t('auth.profile')}>
          {isProfileLoaded && (
            <Formik
              initialValues={profile}
              onSubmit={doSaveBtn}
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
                              readOnly={true}
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
                              value={values?.dob || ''}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorComponent touched={meta.touched} error={meta.error} />
                          </>
                        )}
                      </Field>
                    </FieldWrapper> */}

                    {/* <FieldWrapper>
                      <Field type="text" name="branch">
                        {({ meta }: FieldProps) => (
                          <>
                            <DropDown
                              dropdownLabel={t('auth.branch')}
                              id="branch"
                              name="branch"
                              value={branches?.find(s => s.code === values?.branch)?.label}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              disabledFilter={true}
                              data={branches}
                              configData={{
                                label: 'label',
                                onSelect: (state: DynamicObjectInterface) => {
                                  setFieldValue('state', state.label);
                                  // setSelectedState(state);
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
                      <Button
                        title={t('auth.profileSaveBtn')}
                        disabled={!nextButton}
                        buttonWidth={ButtonWidth.FULL_WIDTH}
                      />
                    </FieldWrapper>
                  </Form>
                );
              }}
            </Formik>
          )}
        </FormWrapper>
        {isLoading && <Loading />}
      </Page>
      <div className="framework-page padding-top-10">
        <div className="framework-form bg-white center width-400">
          <div className="framework-form-title">My Profile</div>

          {/* <Input
          label={'Username'}
          id="userName"
          value={profile?.userName}
          schemaObject={UserInputSchema}
          schemaContext={{ isEdit: true }}
          readOnly={true}
          ref={inputUserName}
        />

        <Input
          label={'Name'}
          id="name"
          value={profile?.name}
          schemaObject={UserInputSchema}
          schemaContext={{ isEdit: true }}
          ref={inputName}
        />

        <Input
          label={'Email'}
          id="email"
          value={profile?.email}
          schemaObject={UserInputSchema}
          schemaContext={{ isEdit: true }}
          ref={inputEmail}
        />

        <Input
          label={'Birthdate'}
          id="dob"
          type="date"
          value={profile?.dob}
          schemaObject={UserInputSchema}
          schemaContext={{ isEdit: true }}
          ref={inputDOB}
        />

        <Input
          label={'State'}
          id="state"
          type="select"
          dataSource={states}
          value={profile?.state}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedState(e.target.value)}
          schemaObject={UserInputSchema}
          schemaContext={{ isEdit: true }}
          ref={inputState}
        />

        <Input
          label={'City'}
          id="city"
          type="select"
          dataSource={cities}
          value={profile?.city}
          schemaObject={UserInputSchema}
          schemaContext={{ isEdit: true }}
          ref={inputCity}
        /> */}
        </div>
      </div>
    </>
  );
};
