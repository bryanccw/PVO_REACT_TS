import { DynamicObjectInterface } from './generalTypes';

export interface MasterStateModel {
  _id?: string;
  code?: string;
  state: string;
  [x: string]: DynamicObjectInterface;
}

export interface MasterCityModel {
  _id?: string;
  postCode?: string;
  areaName?: string;
  stateCode?: string;
  city?: string;
  // others
  [x: string]: DynamicObjectInterface;
}
