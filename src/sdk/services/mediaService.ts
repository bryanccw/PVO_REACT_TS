import mockMedia from '../../__mockData/mockMedia.json';
import { axiosGet } from './axiosUtils';
import './axiosInterceptor';

let mediaService = {
  async getMedia() {
    return await axiosGet(`not-implemented`, mockMedia);
  },
};

export default mediaService;
