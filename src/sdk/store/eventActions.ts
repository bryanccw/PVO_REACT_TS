import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import type { APIParamType, DynamicObjectInterface } from '../type';
import EventService from '../services/eventService';
import { generateSearchEventParam } from './utils';
import eventSlice from './eventSlice';
import { RootState } from './index';

export const eventActions = eventSlice.actions;

export const fetchAllEvents = (param: APIParamType): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async dispatch => {
    const searchParam = generateSearchEventParam(param.searchParam);
    let response: DynamicObjectInterface = await EventService.getEvent(param, searchParam);

    dispatch(eventActions.setEvents({ searchInput: param.searchParam, data: response.data }));

    while (response && response.data?.nextIndex && response.data?.events.length < param.limit) {
      param.lastIndex = response.data.nextIndex;
      const response2 = await EventService.getEvent(param, searchParam);
      if (response2.data.events.length > 0) {
        response.data.events.push(response2.data.events);
      }
      response.data.nextIndex = response2.data.nextIndex;
      // console.log('Continue Looking for more data...');
      // console.log(response);
      dispatch(eventActions.setEvents({ searchInput: param.searchParam, data: response2.data }));
    }
  };
};

export const clearEvents = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return dispatch => {
    dispatch(eventActions.clearEvents());
  };
};
