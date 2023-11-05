import mockProfile from '../../__mockData/mockProfile.json';
import { UserLoginModel } from '../type';
import { axiosPost } from './axiosUtils';
import './axiosInterceptor';

const authService = {
  async doLogin(user: UserLoginModel) {
    return await axiosPost(
      `auth/login`,
      {
        username: user.userName,
        password: user.password,
      },
      mockProfile,
    );
  },

  async forgotPassword(username: string, email: string) {
    return await axiosPost(
      `auth/forgetPassword`,
      {
        username: username,
        email: email,
      },
      mockProfile,
    );
  },

  async validate() {
    return await axiosPost(`auth/validate`, undefined, mockProfile);
  },
};

export default authService;
