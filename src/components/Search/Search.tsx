'use client';

import Image from 'next/image';
import { Input } from '../ui/input';

export function Search() {
  return (
    <div className='bg-primary px-4 py-3 w-full flex justify-center'>
      <div className='relative w-full max-w-xl'>
        <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
          <Image
            src='/svg/iconSearch.svg'
            alt='Ícone de pesquisa'
            width={20}
            height={20}
          />
        </div>

        <Input
          type='text'
          placeholder='busque pela loja ou culinária'
          className='w-full max-w-xl pl-10 bg-white text-primary placeholder-[color:var(--color-text-input)]! font-bold rounded-md text-sm'
        />
      </div>
    </div>
  );
}
