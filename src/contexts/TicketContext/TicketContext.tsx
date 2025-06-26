'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { v4 as uuid } from 'uuid';
import { Action, STORAGE_KEY, TicketItem, TicketState } from './interface';
import { loadInitialState, ticketReducer } from './utils';
import { set } from 'idb-keyval';

interface TicketContextValue extends TicketState {
  addItem(item: Omit<TicketItem, 'lineId'>): string;
  increment(lineId: string): void;
  decrement(lineId: string): void;
  updateItem(item: TicketItem): void;
  removeItem(lineId: string): void;
  setOrderNote(note: string): void;
  clear(): void;
}

const TicketContext = createContext<TicketContextValue | undefined>(undefined);

export function TicketProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ticketReducer, {
    items: [],
    subtotal: 0,
  });

  useEffect(() => {
    loadInitialState().then((initial) =>
      dispatch({ type: 'HYDRATE', payload: initial } as Action)
    );
  }, []);

  useEffect(() => {
    set(STORAGE_KEY, state).catch(console.error);
  }, [state]);

  const addItem = useCallback((item: Omit<TicketItem, 'lineId'>): string => {
    const id = uuid();
    dispatch({ type: 'ADD_ITEM', payload: { ...item, lineId: id } });
    return id;
  }, []);

  const increment = useCallback(
    (lineId: string) => dispatch({ type: 'INCREMENT', payload: { lineId } }),
    []
  );

  const decrement = useCallback(
    (lineId: string) => dispatch({ type: 'DECREMENT', payload: { lineId } }),
    []
  );

  const updateItem = useCallback(
    (item: TicketItem) => dispatch({ type: 'UPDATE_ITEM', payload: item }),
    []
  );

  const removeItem = useCallback(
    (lineId: string) => dispatch({ type: 'REMOVE_ITEM', payload: { lineId } }),
    []
  );

  const setOrderNote = useCallback(
    (note: string) => dispatch({ type: 'SET_NOTE', payload: note }),
    []
  );

  const clear = useCallback(() => dispatch({ type: 'CLEAR' }), []);

  const value = useMemo(
    () => ({
      ...state,
      addItem,
      increment,
      decrement,
      updateItem,
      removeItem,
      setOrderNote,
      clear,
    }),
    [
      state,
      addItem,
      increment,
      decrement,
      updateItem,
      removeItem,
      setOrderNote,
      clear,
    ]
  );

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
}

export function useTicket() {
  const ctx = useContext(TicketContext);
  if (!ctx) throw new Error('useTicket must be used inside <TicketProvider>');
  return ctx;
}
