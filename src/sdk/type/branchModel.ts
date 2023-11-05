export interface BranchModel {
  _id?: string;
  branchName?: string;
  branchCode?: string;
  address?: string;
  fax?: string;
  phone1?: string;
  phone2?: string;
  salesTarget?: number;
  createdBy?: string;
  createdDate?: number;
  updatedBy?: string;
  updatedDate?: number;
  [key: string]: any;
}
