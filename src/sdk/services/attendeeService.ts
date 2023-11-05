import mockAttendees from '../../__mockData/mockAttendees.json';
import { axiosGet } from './axiosUtils';
import './axiosInterceptor';

const attendeeService = {
  async getAttendees() {
    return await axiosGet(`not-implemented`, mockAttendees);
  },
};
export default attendeeService;
