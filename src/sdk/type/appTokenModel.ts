export interface AppTokenModel {
  _id?: string;
  userName?: string;
  name?: string;
  email?: string;
  isDeleted?: boolean;
  branch?: string[];
  role?: string;
  createdBy?: string;
  createdDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
  iat?: number;
  exp?: number;
  [key: string]: any;
}
