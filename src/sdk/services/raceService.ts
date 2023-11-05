import { RaceModel } from '../type';
import { axiosGet, axiosPost /*axiosPut*/ } from './axiosUtils';
import './axiosInterceptor';

const raceService = {
  async createRace(record: RaceModel) {
    return await axiosPost(`race/create`, record);
  },

  async getRace(raceCode = '') {
    return await axiosGet(`race/${raceCode}`);
  },

  // async updateUser(user: UserModel) {
  //   return await axiosPut(`user/profile`, user, mockProfile);
  // },
};
export default raceService;
