import * as yup from 'yup';

export const EventInputSchema = yup.object().shape({
  eventName: yup.string().required('Event Name is Required.'),
  eventType: yup.string().required('Event Type is Required.'),
  startTime: yup.number().required('Start Time is Required.').positive(),
  endTime: yup.number().required('End Time is Required.').positive(),
  region: yup.string().required('Region is Required.'),
  state: yup.string().required('State is Required.'),
  city: yup.string().required('City is Required.'),
  address: yup.string().required('Address is Required.'),
  maxCapacity: yup
    .number()
    .required('Participant Count is Required.')
    .positive('Participant Count must be positive number'),
  isVirtual: yup.boolean().required('Online Activity Option is Required.'),
  contacts: yup
    .array()
    // .of(
    //   yup.object().shape({
    //     name: yup.string().required('Required'), // these constraints take precedence
    //     // contact: yup.string().required('Required'), // these constraints take precedence
    //     // email: yup.string().required('Required'), // these constraints take precedence
    //   })
    // )
    .required('Must have Contacts') // these constraints are shown if and only if inner constraints are satisfied
    .min(1, 'Minimum of 1 contact'),
  targetGroup: yup.string().required('Target Group is Required.'),
  speaker: yup.string().required('Speaker is Required.'),
});
