import { CustomerModel } from '../type';
import { axiosGet, axiosPost /*axiosPut*/ } from './axiosUtils';
import './axiosInterceptor';

const customerService = {
  async createCustomer(customer: CustomerModel) {
    return await axiosPost(`customer/create`, customer);
  },

  async getCustomer(customerId = '') {
    return await axiosGet(`customer/${customerId}`);
  },

  async searchCustomer(searchKey = '') {
    return await axiosGet(`customer/search/PCHP/${searchKey}`);
  },

  // async updateUser(user: UserModel) {
  //   return await axiosPut(`user/profile`, user, mockProfile);
  // },
};
export default customerService;
