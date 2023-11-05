import mockRegistrationData from '../../__mockData/mockRegisteredEvents.json';
import { axiosGet } from './axiosUtils';
import './axiosInterceptor';

const registrationDataService = {
  async getRegistrationData() {
    return await axiosGet(`not-implemented`, mockRegistrationData);
  },
};
export default registrationDataService;
