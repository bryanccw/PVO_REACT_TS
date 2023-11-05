import axios from 'axios';
import { getAPIHost, getAppToken } from '../../ui/utils/helper';
import { isTokenValid, doLogout } from '../../ui/utils/auth';

axios.interceptors.request.use(request => {
  request.headers['Content-Type'] = 'application/json';

  const appToken = getAppToken();

  if (appToken) {
    if (isTokenValid(appToken)) {
      // with valid token time

      request.headers['x-access-token'] = getAppToken();
    } else {
      doLogout();
      throw new axios.Cancel();
    }
  }
  return request;
}, undefined);

axios.interceptors.response.use(
  response => {
    if (response.status === 204) {
      // patch the message for 204
      response.data = {
        returnMessage: response.headers['return-message'],
      };
    }
    return response;
  },
  failedResponse => {
    if (failedResponse.response?.status === 401) {
      throw new axios.Cancel();
    }

    return Promise.reject(failedResponse);
  },
);

// eslint-disable-next-line import/no-anonymous-default-export
const baseUrl = getAPIHost() ?? '';
axios.defaults.baseURL = baseUrl.indexOf('localhost') > -1 ? baseUrl : `${baseUrl}/`;
