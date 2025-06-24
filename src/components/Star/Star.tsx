import Image from 'next/image';
import { StarProps } from './interface';

export function Star(props: StarProps) {
  const { rating, showTotal = false } = props;

  return (
    <div className='flex items-center gap-1 text-muted-foreground ml-auto'>
      <Image
        src='/svg/iconStar.svg'
        width={24}
        height={24}
        alt='Ícone estrela'
      />
      <p>{rating}</p>
      {showTotal && <p>de 5</p>}
    </div>
  );
}
