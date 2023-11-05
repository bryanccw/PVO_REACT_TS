import { ProductCategoryModel } from '../type';
import { axiosGet, axiosPost /*axiosPut*/ } from './axiosUtils';
import './axiosInterceptor';

const productCategoryService = {
  async createProductCategory(record: ProductCategoryModel) {
    return await axiosPost(`productCategory/create`, record);
  },

  async getProductCategory(categoryCode = '') {
    return await axiosGet(`productCategory/${categoryCode}`);
  },

  // async updateUser(user: UserModel) {
  //   return await axiosPut(`user/profile`, user, mockProfile);
  // },
};
export default productCategoryService;
