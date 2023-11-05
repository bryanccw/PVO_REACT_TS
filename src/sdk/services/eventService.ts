import mockEvents from '../../__mockData/mockEvents.json';
import { DynamicObjectInterface } from '../type';
import { axiosGet } from './axiosUtils';
import './axiosInterceptor';

const eventService = {
  async getEventByStateCity(state: string, city: string) {
    return await axiosGet(`event/list/${state}/${city}`, mockEvents);
  },
  async getEvent(param: DynamicObjectInterface, searchParam: string) {
    return await axiosGet(`event/list?limit=${param.limit}&lastIndex=${param.lastIndex}&${searchParam}`, mockEvents);
  },
};
export default eventService;
