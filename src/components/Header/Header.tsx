'use client';

import { MapPin, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-primary'>
      <Image
        src='/svg/iconRoxo.svg'
        alt='Logo aiqFome'
        width={32}
        height={32}
      />
      <div className='flex gap-[10px]'>
        <Image
          src='/svg/iconLocationDefault.svg'
          alt='Logo aiqFome'
          width={32}
          height={32}
        />
        <div>
          <span className='text-sm font-bold text-secondary'>
            entregando em
          </span>
          <div className='flex'>
            <h3 className='text-base font-bold flex items-center'>
              Rua Mandaguari, 198
            </h3>
            <Image
              src='/svg/iconArrow.svg'
              alt='Logo aiqFome'
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>

      <Image
        src='/svg/iconUser.svg'
        alt='Logo aiqFome'
        width={32}
        height={32}
      />
    </header>
  );
}
