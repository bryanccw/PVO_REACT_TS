import { PaymentModeModel } from '../type';
import { axiosGet, axiosPost /*axiosPut*/ } from './axiosUtils';
import './axiosInterceptor';

const paymentModeService = {
  async createPaymentMode(record: PaymentModeModel) {
    return await axiosPost(`paymMode/create`, record);
  },

  async getPaymentMode(paymentModeCode = '') {
    return await axiosGet(`paymMode/${paymentModeCode}`);
  },

  // async updateUser(user: UserModel) {
  //   return await axiosPut(`user/profile`, user, mockProfile);
  // },
};
export default paymentModeService;
