import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DynamicObjectInterface } from '../type';
import type { UserModel } from '../type';

interface stateModel {
  user?: UserModel;
}

const initialState: stateModel = {
  user: {},
};

const userSlide = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<DynamicObjectInterface>) {
      console.log(action);
      state.user = action.payload;
    },
  },
});

export default userSlide;
