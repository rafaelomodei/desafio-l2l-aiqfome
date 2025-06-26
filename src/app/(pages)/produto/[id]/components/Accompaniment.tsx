import { ProductPrice } from '@/components/ProductPrice/ProductPrice';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Image from 'next/image';

const Accompaniment = () => {
  return (
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
  );
};

export default Accompaniment;
