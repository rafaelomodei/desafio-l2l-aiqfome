import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getEstablishment, getProduct } from '@/lib/services/establishment';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function EstablishmentMenu({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) notFound();

  return (
    <main className='font-semibold text-[color:var(--color-text)]'>
      <div className='w-full max-w-container mx-auto mt-[1px]'>
        <Image
          src='/png/banners/bannerRangoBaratoDiaDasCriancas.png'
          alt="Banner promocional colorido: crianças fantasiadas com rostos de adultos seguram comida, com o texto 'rango barato no dia das crianças!' e 'peça com até 50% OFF'"
          className='w-full h-auto cursor-pointer'
          width={800}
          height={300}
        />
      </div>
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
          <Button
            variant='secondary'
            size='lg'
            className='text-white bg-[color:var(--color-text)]!'
          >
            adicionar
          </Button>
        </div>
        <div className='flex flex-col'></div>

        <div className='border-b-4' />

        <div className='flex flex-col gap-4 px-4'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-1'>
              <p className='text-[color:var(--color-text-title)]'>
                qual o tamanho?
              </p>
              <div className='flex gap-1 items-center'>
                <p>escolha 1</p>
              </div>
            </div>
            <Badge
              variant='secondary'
              className='font-semibold h-8 text-white bg-[color:var(--color-text-title)]  shadow-none'
            >
              obrigatório
            </Badge>
          </div>
          <RadioGroup defaultValue='option-one'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <RadioGroupItem value='option-one' id='option-one' />
                <Image
                  src='/svg/iconMoney.svg'
                  alt='Ícon representando moeda'
                  width={20}
                  height={20}
                />
                <Label htmlFor='option-one'>médio</Label>
              </div>

              <ProductPrice
                showRow
                price={22.9}
                pricePromotion={19.9}
                priceClassName=''
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <RadioGroupItem value='option-two' id='option-two' />
                <Label htmlFor='option-two'>grande</Label>
              </div>
              <ProductPrice price={28.9} />
            </div>
          </RadioGroup>
        </div>

        <div className='border-b-4' />

        <div className='flex flex-col gap-4 px-4'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-1'>
              <p className='text-[color:var(--color-text-title)]'>
                acompanhamentos
              </p>
              <div className='flex gap-1 items-center'>
                <p>escolha 1 a 2</p>
              </div>
            </div>
            <Badge
              variant='secondary'
              className='font-semibold h-8 text-white bg-[color:var(--color-text-title)]  shadow-none'
            >
              obrigatório
            </Badge>
          </div>
          <RadioGroup defaultValue='option-one'>
            <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <RadioGroupItem value='option-one' id='option-one' />
                <Image
                  src='/svg/iconMoney.svg'
                  alt='Ícon representando moeda'
                  width={20}
                  height={20}
                />
                <Label htmlFor='option-one'>médio</Label>
              </div>

              <ProductPrice
                showRow
                price={22.9}
                pricePromotion={19.9}
                priceClassName=''
              />
            </div>
            <div className='flex justify-between'>
              <div className='flex items-center gap-3'>
                <RadioGroupItem value='option-two' id='option-two' />
                <Label htmlFor='option-two'>grande</Label>
              </div>
              <ProductPrice price={28.9} />
            </div>
          </RadioGroup>
        </div>

        <div className='border-b-4' />
      </div>
    </main>
  );
}
