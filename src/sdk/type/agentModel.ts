import type { ContactInfoModel } from './contactModel';

export interface AgentModel {
  _id?: string;
  agentId?: string;
  name?: string;
  company?: string;
  contactInfo: ContactInfoModel[];
  createdBy?: string;
  createdDate?: number;
  modifiedBy?: string;
  modifiedDate?: number;
}
