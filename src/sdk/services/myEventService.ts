import mockMyEvents from '../../__mockData/mockMyEvents.json';
import { DynamicObjectInterface } from '../type';
import { axiosGet, axiosPost } from './axiosUtils';
import './axiosInterceptor';

const myEventService = {
  async registerEvent(eventId: string) {
    return await axiosPost(`myevent/register`, {
      eventId: eventId,
    });
  },
  async getMyEvent(param: DynamicObjectInterface, searchParam: string) {
    return await axiosGet(`myevent/list?limit=${param.limit}&${searchParam}`, { events: mockMyEvents });
  },
};
export default myEventService;
