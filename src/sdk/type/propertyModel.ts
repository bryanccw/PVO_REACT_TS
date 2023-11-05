import type { ContactInfoModel } from './index';

export interface PropertyItemModel {
  propertyId: string;
  //ownerId: string;
  unit: string;
  address: string;
  city: string;
  state?: Date;
  contact?: ContactInfoModel[];
  description?: string;
  price?: number;
  images?: string[];
  status: number;
  createdBy?: string;
  createdDate?: number;
  modifiedBy?: string;
  modifiedDate?: number;
}
