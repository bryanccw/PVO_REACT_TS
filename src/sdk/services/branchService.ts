import { BranchModel } from '../type';
import { axiosGet, axiosPost /*axiosPut*/ } from './axiosUtils';
import './axiosInterceptor';

const branchService = {
  async createBranch(branch: BranchModel) {
    return await axiosPost(`branch/create`, branch);
  },

  async getBranch(branchCode = '') {
    return await axiosGet(`branch/${branchCode}`);
  },

  // async updateUser(user: UserModel) {
  //   return await axiosPut(`user/profile`, user, mockProfile);
  // },
};
export default branchService;
