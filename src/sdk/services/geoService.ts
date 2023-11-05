import mockStates from '../../__mockData/mockStates.json';
import mockCities from '../../__mockData/mockCities.json';
import { axiosGet } from './axiosUtils';
import './axiosInterceptor';

const geoService = {
  async getStates() {
    return await axiosGet(`geo/states`, mockStates);
  },

  async getCityByState(state: string) {
    return await axiosGet(`geo/cities/${state}`, mockCities);
  },
};
export default geoService;
