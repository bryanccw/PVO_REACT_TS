import mockProfile from '../../__mockData/mockProfile.json';
import { UserModel } from '../type';
import { axiosGet, axiosPost, axiosPut } from './axiosUtils';
import './axiosInterceptor';

const userService = {
  async createUser(user: UserModel) {
    return await axiosPost(`user/register`, user, { ...mockProfile, insertedId: '23456789', userName: user.userName });
  },

  async getUsers(userID = '') {
    return await axiosGet(`user/${userID}`, mockProfile);
  },

  async getProfile() {
    return await axiosGet(`user/profile`, mockProfile);
  },

  async updateProfile(user: UserModel) {
    return await axiosPut(`user/profile`, user, mockProfile);
  },
};
export default userService;
