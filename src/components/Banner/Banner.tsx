'use client';

import Image from 'next/image';

export function Banner() {
  return (
    <div className='w-full max-w-container mx-auto mt-[1px]'>
      <Image
        src='/png/banners/bannerRangoBaratoDiaDasCriancas.png'
        alt="Banner promocional colorido: crianças fantasiadas com rostos de adultos seguram comida, com o texto 'rango barato no dia das crianças!' e 'peça com até 50% OFF'"
        className='w-full h-auto cursor-pointer'
        width={800}
        height={300}
      />
    </div>
  );
}
