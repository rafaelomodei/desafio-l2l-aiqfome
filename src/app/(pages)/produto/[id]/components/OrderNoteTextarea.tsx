'use client';

import { Textarea } from '@/components/ui/textarea';
import { useTicket } from '@/contexts/TicketContext/TicketContext';
import { useState, useEffect } from 'react';

export default function OrderNoteTextarea() {
  const { orderNote = '', setOrderNote } = useTicket();
  const [text, setText] = useState(orderNote);

  useEffect(() => setText(orderNote), [orderNote]);

  return (
    <Textarea
      placeholder='alguma observação do item? • opcional
                   ex: tirar algum ingrediente, ponto do prato'
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => setOrderNote(text.trim())}
      className='min-h-[58px]'
    />
  );
}
