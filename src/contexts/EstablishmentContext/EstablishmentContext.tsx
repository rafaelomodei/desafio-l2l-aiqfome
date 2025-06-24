'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { get, set } from 'idb-keyval';
import { mockEstablishments } from '@/mocks/establishments';

interface EstablishmentContextProps {
  establishments: Establishment[];
  getById: (id: string) => Establishment | undefined;
}

const EstablishmentContext = createContext({} as EstablishmentContextProps);

export function EstablishmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [establishments, setEstablishments] = useState<Establishment[]>([]);

  useEffect(() => {
    get('establishments').then((data) => {
      if (data) {
        setEstablishments(data);
      } else {
        set('establishments', mockEstablishments);
        setEstablishments(mockEstablishments);
      }
    });
  }, []);

  const getById = (id: string) => establishments.find((e) => e.id === id);

  return (
    <EstablishmentContext.Provider value={{ establishments, getById }}>
      {children}
    </EstablishmentContext.Provider>
  );
}

export function useEstablishmentContext() {
  return useContext(EstablishmentContext);
}
