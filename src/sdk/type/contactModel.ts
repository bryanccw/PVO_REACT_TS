export type ContactType = {
  contactType: string;
  contactDesc?: string;
  contact: string;
};

export interface ContactInfoModel {
  _id?: string;
  contactPerson?: string;
  contactDetails: ContactType[];
}
