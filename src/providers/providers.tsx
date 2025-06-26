'use client';

import { TicketProvider } from '@/contexts/TicketContext/TicketContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <TicketProvider>{children}</TicketProvider>;
}
