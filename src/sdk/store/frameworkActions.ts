import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import branchService from '../services/branchService';
import productCategoryService from '../services/productCategoryService';
import paymentModeService from '../services/paymentModeService';
import raceService from '../services/raceService';
import frameworkSlide from './frameworkSlice';
import { RootState } from './index';

export const frameworkActions = frameworkSlide.actions;

export const fetchBranches = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    let branches = JSON.parse(sessionStorage.getItem('branches') || '[]');
    if (!branches.length) {
      const response = await branchService.getBranch();
      sessionStorage.setItem('branches', JSON.stringify(response.data));
      branches = response.data;
    }

    dispatch(frameworkActions.setBranches(branches));
  };
};

export const fetchRaces = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    let races = JSON.parse(sessionStorage.getItem('races') || '[]');
    if (!races.length) {
      const response = await raceService.getRace();
      sessionStorage.setItem('races', JSON.stringify(response.data));
      races = response.data;
    }
    dispatch(frameworkActions.setRaces(races));
  };
};

export const fetchPaymentModes = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    let paymentModes = JSON.parse(sessionStorage.getItem('paymentModes') || '[]');
    if (!paymentModes.length) {
      const response = await paymentModeService.getPaymentMode();
      sessionStorage.setItem('paymentModes', JSON.stringify(response.data));
      paymentModes = response.data;
    }
    dispatch(frameworkActions.setPaymentModes(paymentModes));
  };
};

export const fetchProductCategories = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    let productCategories = JSON.parse(sessionStorage.getItem('productCategories') || '[]');
    if (!productCategories.length) {
      const response = await productCategoryService.getProductCategory();
      sessionStorage.setItem('productCategories', JSON.stringify(response.data));
      productCategories = response.data;
    }
    dispatch(frameworkActions.setProductCategories(productCategories));
  };
};
