import { useEstablishmentContext } from '@/contexts/EstablishmentContext/EstablishmentContext';

export const useEstablishments = () => {
  const { establishments, getById } = useEstablishmentContext();
  return { establishments, getById };
};
