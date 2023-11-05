export interface PaymentModeModel {
  _id?: string;
  paymentType?: string;
  paymentTypeCode?: string;
  createdBy?: string;
  createdDate?: number;
  updatedBy?: string;
  updatedDate?: number;
  [key: string]: any;
}
