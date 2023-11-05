import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import userSlide from './userSlice';
import { RootState } from './index';

export const userActions = userSlide.actions;

export const fetchUser = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    dispatch(userActions.setUser({}));
  };
};
