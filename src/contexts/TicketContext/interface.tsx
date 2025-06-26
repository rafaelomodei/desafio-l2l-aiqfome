export interface TicketExtra {
  id: string;
  name: string;
  unitPrice: number;
  qty: number;
}

export interface TicketOption {
  groupId: string;
  groupName: string;
  choiceId: string;
  choiceName: string;
  extraPrice: number;
}

export interface TicketItem {
  lineId: string;
  establishmentId: string;
  productId: string;
  productName: string;
  basePrice: number;
  qty: number;
  options: TicketOption[];
  extras: TicketExtra[];
  note?: string;
}

export interface TicketState {
  items: TicketItem[];
  subtotal: number;
  orderNote?: string;
}

export type Action =
  | { type: 'HYDRATE'; payload: TicketState }
  | { type: 'ADD_ITEM'; payload: TicketItem }
  | { type: 'INCREMENT'; payload: { lineId: string } }
  | { type: 'DECREMENT'; payload: { lineId: string } }
  | { type: 'UPDATE_ITEM'; payload: TicketItem }
  | { type: 'REMOVE_ITEM'; payload: { lineId: string } }
  | { type: 'SET_NOTE'; payload: string }
  | { type: 'CLEAR' };

export const STORAGE_KEY = 'aiq.ticket.v1';
