import { get, set } from 'idb-keyval';
import { Action, STORAGE_KEY, TicketItem, TicketState } from './interface';

export function calculateItemTotal(item: TicketItem): number {
  const extrasTotal = item.extras.reduce(
    (acc, e) => acc + e.unitPrice * e.qty,
    0
  );
  const optionsTotal = item.options.reduce((acc, o) => acc + o.extraPrice, 0);
  return (item.basePrice + optionsTotal + extrasTotal) * item.qty;
}

export function recalc(state: TicketState): TicketState {
  const subtotal = state.items.reduce(
    (acc, item) => acc + calculateItemTotal(item),
    0
  );
  return { ...state, subtotal };
}

export function ticketReducer(state: TicketState, action: Action): TicketState {
  switch (action.type) {
    case 'HYDRATE':
      return recalc(action.payload);

    case 'ADD_ITEM': {
      const idx = state.items.findIndex(
        (i) =>
          i.productId === action.payload.productId &&
          JSON.stringify(i.options) ===
            JSON.stringify(action.payload.options) &&
          JSON.stringify(i.extras) === JSON.stringify(action.payload.extras) &&
          i.note === action.payload.note
      );

      if (idx !== -1) {
        const updated = [...state.items];
        updated[idx].qty += action.payload.qty;
        return recalc({ ...state, items: updated });
      }
      return recalc({ ...state, items: [...state.items, action.payload] });
    }

    case 'INCREMENT': {
      const updated = state.items.map((i) =>
        i.lineId === action.payload.lineId ? { ...i, qty: i.qty + 1 } : i
      );
      return recalc({ ...state, items: updated });
    }

    case 'DECREMENT': {
      const updated = state.items
        .map((i) =>
          i.lineId === action.payload.lineId ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0);
      return recalc({ ...state, items: updated });
    }

    case 'UPDATE_ITEM': {
      const updated = state.items.map((i) =>
        i.lineId === action.payload.lineId ? action.payload : i
      );
      return recalc({ ...state, items: updated });
    }

    case 'REMOVE_ITEM': {
      return recalc({
        ...state,
        items: state.items.filter((i) => i.lineId !== action.payload.lineId),
      });
    }

    case 'SET_NOTE':
      return { ...state, orderNote: action.payload };

    case 'CLEAR':
      return { items: [], subtotal: 0 };

    default:
      return state;
  }
}

export async function loadInitialState(): Promise<TicketState> {
  const saved = await get<TicketState>(STORAGE_KEY);
  return saved ?? { items: [], subtotal: 0 };
}
