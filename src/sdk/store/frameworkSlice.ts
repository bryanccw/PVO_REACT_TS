import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DynamicObjectInterface } from '../type';
import type { FrameworkModel } from '../type';

const initialState: FrameworkModel = {
  branches: [],
  selectedBranch: {},
  paymentModes: [],
  productCategories: [],
  races: [],
};

const frameworkSlide = createSlice({
  name: 'framework',
  initialState: initialState,
  reducers: {
    setBranches(state, action: PayloadAction<DynamicObjectInterface>) {
      state.branches = action.payload;
    },
    setSelectedBranch(state, action: PayloadAction<DynamicObjectInterface>) {
      state.selectedBranch = action.payload;
    },
    setPaymentModes(state, action: PayloadAction<DynamicObjectInterface>) {
      state.paymentModes = action.payload;
    },
    setProductCategories(state, action: PayloadAction<DynamicObjectInterface>) {
      state.productCategories = action.payload;
    },
    setRaces(state, action: PayloadAction<DynamicObjectInterface>) {
      state.races = action.payload;
    },
    setAll(state, action: PayloadAction<DynamicObjectInterface>) {
      state.branches = action.payload.branches;
      state.paymentModes = action.payload.paymentModes;
      state.productCategories = action.payload.productCategories;
      state.races = action.payload.races;
    },
  },
});

export default frameworkSlide;
