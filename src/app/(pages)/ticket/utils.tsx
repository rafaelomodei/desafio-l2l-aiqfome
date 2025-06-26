import { TicketItem } from '@/contexts/TicketContext/interface';

export function groupByEstablishment(
  items: TicketItem[]
): Record<string, TicketItem[]> {
  return items.reduce<Record<string, TicketItem[]>>((acc, item) => {
    (acc[item.establishmentId] ??= []).push(item);
    return acc;
  }, {});
}
