import axios from 'axios';
import type { DynamicObjectInterface } from '../type';

const mockResolve = (mockData?: DynamicObjectInterface) => ({
  data: mockData ?? {},
  status: 200,
});
export const axiosGet = async (url: string, mockData?: DynamicObjectInterface) => {
  if (process.env.REACT_APP_OFFLINE === 'true') {
    return Promise.resolve(mockResolve(mockData));
  } else {
    return await axios.get(url);
  }
};

export const axiosPost = async (url: string, payload?: DynamicObjectInterface, mockData?: DynamicObjectInterface) => {
  if (process.env.REACT_APP_OFFLINE === 'true') {
    return Promise.resolve(mockResolve(mockData));
  } else {
    return await axios.post(url, payload ?? {});
  }
};

export const axiosPut = async (url: string, payload?: DynamicObjectInterface, mockData?: DynamicObjectInterface) => {
  if (process.env.REACT_APP_OFFLINE === 'true') {
    return Promise.resolve(mockResolve(mockData));
  } else {
    return await axios.put(url, payload ?? {});
  }
};
