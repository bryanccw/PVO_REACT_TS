import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formatTime24, formatFullDate } from '../../ui/utils/dateUtils';
import { DynamicObjectInterface } from '../type';
import type { EventStateModel } from '../type/';

const initialEventState: EventStateModel = {
  allEvents: [],
  nextIndex: '',
  loaded: false,
  numOfRecords: -1,
  searchInputValue: void 0,
};

const eventSlide = createSlice({
  name: 'event',
  initialState: initialEventState,
  reducers: {
    setEvents(state, action: PayloadAction<DynamicObjectInterface>) {
      state.allEvents = [...state.allEvents, ...action.payload.data.events];
      state.nextIndex = action.payload.data.nextIndex;
      state.loaded = true;
      state.numOfRecords = action.payload.data.events.length;
      state.searchInputValue = action.payload.searchInput;
      if (state.allEvents && state.allEvents.length > 0) {
        state.allEvents.map(event => {
          event.date = formatFullDate(event.eventDate.start);
          event.startTime = formatTime24(event.eventTime.start);
          event.endTime = formatTime24(event.eventTime.end);

          return event;
        });
      }
      state.allEvents = state.allEvents.sort(
        (first: DynamicObjectInterface, second: DynamicObjectInterface) =>
          0 - (new Date(first.date).getTime() < new Date(second.date).getTime() ? -1 : 1),
      );
    },
    clearEvents(state) {
      state.allEvents = [];
      state.nextIndex = '';
      state.numOfRecords = -1;
    },
  },
});

export default eventSlide;
