import { DynamicObjectInterface } from './generalTypes';

export interface TicketModel {
  ticketId: string;
  partyType: string;
  abo: string;
  partyName: string;
  fullName: string;
  email: string;
  phone: string;
}

export type OrganizerModel = {
  email: string;
  phone: string;
};

export interface RegistrationModel {
  registrationNumber: string;
  event: DynamicObjectInterface;
  registrationDate: string;
  totalTickets: number;
  totalCost: string;
  organizer: OrganizerModel;
  tickets: TicketModel[];
}
