'use client';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import { Dancing_Script, Open_Sans } from '@next/font/google';

type Props = {};

const dancingFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['500'],
});

const subtitleFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
});

export default function PageBanner({}: Props) {
  return (
    <div className="relative h-[75vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1488345979593-09db0f85545f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt="Welcome image"
        style={{ objectFit: 'cover' }}
        fill={true}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 min-h-fit text-center md:w-2/4">
          <h1
            className={`mb-4 text-3xl md:text-4xl dancingFont lg:text-6xl ${dancingFont.className}`}
          >
            Masaż
          </h1>

          <div className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2" />
          <p
            className={`subtitle-white text-lg tracking-wide ${subtitleFont.className}`}
          >
            Skorzystaj z profesjonalnego masazu ciała
          </p>
        </div>
      </div>
    </div>
  );
}
