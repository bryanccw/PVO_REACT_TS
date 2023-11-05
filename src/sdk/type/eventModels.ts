import type { PropertyItemModel } from './propertyModel';
import type { AgentModel } from './agentModel';
import { DynamicObjectInterface } from './generalTypes';

export type EventDateRangeType = {
  start: string;
  end: string;
};

export interface EventModel {
  _id?: string;
  eventName: string;
  eventDate: EventDateRangeType;
  eventTime: EventDateRangeType;
  preferredTime: EventDateRangeType[];
  venueInformation: PropertyItemModel;
  agent: AgentModel;
  eventPrice: number;
  status: string;
  createdBy?: string;
  createdDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  // non db fields
  date?: string;
  startTime?: string;
  endTime?: string;
  registrationDate?: string;
  registrationStatus?: string;
}

export type EventStateModel = {
  allEvents: EventModel[];
  loaded: boolean;
  numOfRecords: number;
  nextIndex: string;
  searchInputValue: DynamicObjectInterface;
};

export type EventSearchType = {
  state?: string;
  city?: string;
};
