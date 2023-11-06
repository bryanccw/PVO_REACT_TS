export interface CustomerModel {
  _id?: string;
  custId?: string;
  custName?: string;
  gender?: string;
  icNo?: string;
  address?: string;
  birthdate?: string;
  raceCode?: string;
  race?: string;
  branchCode?: string;
  contacts: {
    phone1?: string;
    phone2?: string;
    phone3?: string;
    phone4?: string;
    email?: string;
    fax?: string;
    [key: string]: any;
  };
  createdBy?: string;
  createdDate?: string;
  updatedBy?: string;
  updatedDate?: string;
  [key: string]: any;
}


export interface CustomerSearchProps {
  name?: string;
  icNo?: string;
  branchCode?: string;
  phone?: string;
  email?: string;
  [key: string]: any;
}