import { CardInfoPrice } from '@/components/CardInfoPrice/CardInfoPrice';
import { Star } from '@/components/Star/Star';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import CategoryProductsAccordion from '@/components/CategoryProductsAccordion/CategoryProductsAccordion';
import { notFound } from 'next/navigation';
import {
  getCategoriesByEstablishment,
  getEstablishment,
  getProductsByEstablishment,
} from '@/lib/services/establishment';

export default async function EstablishmentMenu({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const establishment = await getEstablishment(id);

  if (!establishment) notFound();

  const categories = await getCategoriesByEstablishment(establishment.id);
  const products = await getProductsByEstablishment(establishment.id);

  const {
    name,
    image,
    isOpen,
    rating,
    deliveryFee,
    closingTime,
    openingTime,
    minOrderValue,
    deliveryPrice,
    outsourcedMotorcycle,
    estimatedDeliveryTime,
  } = establishment;

  return (
    <main className='flex justify-center bg-background px-4 py-6 text-[color:var(--color-text)]'>
      <div className='flex flex-col w-full max-w-2xl gap-1 '>
        <div className='flex gap-2 pb-2 items-center'>
          <div className='w-[36px] h-[36px]  rounded overflow-hidden'>
            <Image
              src={image}
              alt={`Imagem do restaurante `}
              width={36}
              height={36}
            />
          </div>
          <h3 className='font-bold text-xl truncate text-[color:var(--color-text-title)] '>
            {name}
          </h3>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <Button variant='ghost' className='px-2'>
              <Image
                src='/svg/iconShared.svg'
                alt={`Icon compartilhar`}
                width={32}
                height={32}
              />
            </Button>

            <Button variant='ghost' className='px-2'>
              <Image
                src='/svg/iconLike.svg'
                alt={`Icon compartilhar`}
                width={32}
                height={32}
              />
            </Button>
          </div>

          <Button
            variant='link'
            className='p-0 text-sm text-[color:var(--color-text-verde-agua)]'
          >
            mais infos
            <Image
              src='/svg/iconArrowVerdeAgua.svg'
              alt={`Icon compartilhar`}
              width={16}
              height={16}
            />
          </Button>
        </div>
        <div className='flex gap-[6px] font-semibold'>
          <CardInfoPrice
            deliveryFee={Boolean(deliveryFee)}
            deliveryPrice={deliveryPrice}
            outsourcedMotorcycle={outsourcedMotorcycle}
          />
          <p>hoje, {estimatedDeliveryTime}</p>
          <p>5.2km</p>
        </div>
        <Badge
          variant='secondary'
          className='font-semibold h-[28px] text-[color:var(--color-text-verde-agua)] bg-[color:var(--color-text-verde-agua)]/10 shadow-none'
        >
          entrega grátis acima de R$ 35,00
        </Badge>
        <div className='flex gap-2 font-semibold'>
          {isOpen ? (
            <>
              <Star rating={rating} showTotal />
              <p className='text-[color:var(--color-success)]'>
                fecha às {closingTime}
              </p>
            </>
          ) : (
            <>
              <Star rating={rating} showTotal />
              <p className='text-[color:var(--color-error)]'>
                abre às {openingTime}
              </p>
            </>
          )}
        </div>
        {Boolean(minOrderValue) && (
          <p className='font-semibold'>
            pedido mínimo: R$ {minOrderValue.toFixed(2)}
          </p>
        )}
        <div>
          <CategoryProductsAccordion
            categories={categories}
            products={products}
          />
        </div>
      </div>
    </main>
  );
}
