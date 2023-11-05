import * as Yup from 'yup';

export const EmailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
export const TextRegex = /^[a-zA-Z'-]*(?: [a-zA-Z'-]+)*$/;

export const isEmail = (email: string) => EmailRegex.test(String(email).toLowerCase());

export const numberRegex = /^\d*$/;
export const isNumber = (n: string) => numberRegex.test(n.toString());

export const shippingAddrressValidationSchema = Yup.object().shape({
  recipientFirstName: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.receipientFirstName.format')
    .max(50, 'profile.validationMsg.string.max50')
    .required('profile.validationMsg.recipientFirstName.required'),
  recipientLastName: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.secondName.format')
    .max(50, 'profile.validationMsg.string.max50'),
  addrLineOne: Yup.string()
    .max(100, 'profile.validationMsg.string.max100')
    .required('profile.validationMsg.address.required'),
  addrLineTwo: Yup.string().max(100, 'profile.validationMsg.string.max100'),
  postalCode: Yup.string()
    .max(5, 'profile.validationMsg.postalCode.format')
    .min(5, 'profile.validationMsg.postalCode.format')
    .required('profile.validationMsg.postalCode.required'),
  contactNickname: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.addressNickname.format')
    .max(50, 'profile.validationMsg.string.max50'),
  city: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.city.format')
    .required('profile.validationMsg.city.required'),
  state: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.state.format')
    .required('profile.validationMsg.state.required'),
  phone: Yup.number().required('profile.validationMsg.phone.required'),
  deliveryInstructions: Yup.string().max(50, 'profile.validationMsg.string.max50'),
});
export const contactFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.firstName.format')
    .max(50, 'profile.validationMsg.string.max50')
    .required('profile.validationMsg.firstName.required'),
  lastName: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.lastName.format')
    .max(50, 'profile.validationMsg.string.max50'),
  email: Yup.string()
    .matches(EmailRegex, 'profile.validationMsg.email.format')
    .required('profile.validationMsg.email.required'),
});
export const signupFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.firstName.format')
    .max(50, 'profile.validationMsg.string.max50')
    .required('profile.validationMsg.firstName.required'),
  lastName: Yup.string()
    .matches(TextRegex, 'profile.validationMsg.lastName.format')
    .max(50, 'profile.validationMsg.string.max50')
    .required('profile.validationMsg.lastName.required'),
});
