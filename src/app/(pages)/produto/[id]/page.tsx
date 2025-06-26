import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { getProduct } from '@/lib/services/establishment';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProductSize from './components/ProductSize';
import Accompaniment from './components/Accompaniment';
import ProductCount from '@/components/ProductCount/ProductCount';
import ProductActions from './components/ProductActions';
import Dink from './components/Dink';
import Cutlery from './components/Cutlery';
import AnythingElse from './components/AnythingElse';
import ObservationTextarea from './components/OrderNoteTextarea';
import OrderNoteTextarea from './components/OrderNoteTextarea';

export default async function EstablishmentMenu({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <main className='flex justify-center font-semibold pb-[68px]  text-[color:var(--color-text)]'>
      <div className=' w-full max-w-2xl'>
        {product.image && (
          <div className='w-full max-w-container mx-auto mt-[1px]'>
            <Image
              src={product.image}
              alt="Banner promocional colorido: crianças fantasiadas com rostos de adultos seguram comida, com o texto 'rango barato no dia das crianças!' e 'peça com até 50% OFF'"
              className='w-full h-auto cursor-pointer'
              width={800}
              height={150}
            />
          </div>
        )}
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2 p-4'>
            <div className='flex gap-1 items-center'>
              <p className='font-semibold text-[color:var(--color-text-title)]'>
                {product.name}
              </p>
              {product.icon && (
                <Image
                  src={product.icon}
                  alt={`ícon ${product.name}`}
                  width={20}
                  height={20}
                />
              )}
            </div>
            <div className='flex'>
              <ProductPrice
                showRow
                price={product.price}
                priceRange={product.priceRange}
                pricePromotion={product.pricePromotion}
                priceClassName='font-black text-xl'
              />
            </div>
            {product.description && (
              <p className='text-md'>{product.description}</p>
            )}
          </div>
          <div className='flex justify-between items-center px-4'>
            <div className='flex flex-col gap-1'>
              <p className='text-[color:var(--color-text-title)]'>quantos?</p>
              <div className='flex gap-1 items-center'>
                <p>total</p>
                <ProductPrice
                  showRow
                  price={product.price}
                  priceRange={product.priceRange}
                  pricePromotion={product.pricePromotion}
                  priceClassName='font-sem text-[color:var(--color-text)]'
                />
              </div>
            </div>
            <ProductActions
              productId={product.id}
              productName={product.name}
              establishmentId={product.establishmentId}
              basePrice={product.price}
            />
          </div>
          <div className='flex flex-col'></div>

          <div className='border-b-4' />

          <ProductSize
            productId={product.id}
            productName={product.name}
            establishmentId={product.establishmentId}
          />

          <div className='border-b-4' />

          <Accompaniment
            productId={product.id}
            productName={product.name}
            establishmentId={product.establishmentId}
          />

          <div className='border-b-4' />

          <Dink
            productId={product.id}
            establishmentId={product.establishmentId}
          />

          <div className='border-b-4' />

          <Cutlery
            productId={product.id}
            productName={product.name}
            establishmentId={product.establishmentId}
          />

          <div className='border-b-4' />
          <AnythingElse
            productId={product.id}
            productName={product.name}
            establishmentId={product.establishmentId}
          />

          <div className='border-b-4' />

          <OrderNoteTextarea />
        </div>
      </div>
    </main>
  );
}
