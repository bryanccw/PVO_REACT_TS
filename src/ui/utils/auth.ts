import jwt_decode from 'jwt-decode';
import authService from '../../sdk/services/authService';
import userService from '../../sdk/services/userService';
import type { UserModel, AppTokenModel } from '../../sdk/type';
import { LoggerService } from './logger';

export const doLogin = async (username: string, password: string) => {
  try {
    let res = await authService.doLogin({
      userName: username,
      password: password,
    });

    if (res.data.status) {
      // register in localStorage
      localStorage.setItem('appToken', res.data.token.appToken);
      localStorage.setItem('exp', res.data.token.exp);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('userName', JSON.stringify(res.data.user.userName));

      return true;
    } else {
      LoggerService.log(res.data.message);
      return false;
    }
  } catch (e) {
    LoggerService.log('Login Error', e);
    return false;
  }
};

export const doLogout = () => {
  LoggerService.log('Logout system, clear data');
  // clear localStorage
  localStorage.removeItem('appToken');
  localStorage.removeItem('exp');
  localStorage.removeItem('user');

  window.location.href = '/';
};

export const doRegister = async (user: UserModel) => {
  try {
    let res = await userService.createUser(user);

    if (res.data?.insertedId) {
      return user.userName;
    } else {
      LoggerService.log(res.data?.message);
      return false;
    }
  } catch (e) {
    LoggerService.log('Register Error', e);
    return false;
  }
};

export const isTokenValid = (token: string = '') => {
  if (!token) {
    token = localStorage.getItem('appToken') || '';
  }

  if (token) {
    const decoded: AppTokenModel = jwt_decode(token);

    if (decoded?.exp) {
      return new Date().getTime() < decoded.exp * 1000;
    }
    return false;
  }
  return false;
};

export const validateToken = async (token: string = '') => {
  if (!token) {
    token = localStorage.getItem('appToken') || '';
  }

  if (token) {
    try {
      let res = await authService.validate();
      LoggerService.log(res);

      return true;
    } catch (e) {
      LoggerService.log('Register Error', e);
    }
  }
  return false;
};
