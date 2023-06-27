'use client';

import Image from 'next/image';
import React from 'react';
import { Dancing_Script, Open_Sans } from 'next/font/google';
import { Services } from '../../typings';
import { urlFor } from '../../lib/imageBuilder';

const dancingFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['500'],
});

const subtitleFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
});

type Props = {
  data: Services;
};

export default function PageBanner({ data }: Props) {
  return (
    <div className="relative wrapper  h-[60vh] w-full">
      <Image
        src={urlFor(data.image).url()}
        alt={data.title}
        style={{ objectFit: 'cover' }}
        fill={true}
      />
      <div className="absolute grid h-full w-full place-items-center bg-black/50">
        <div className="w-5/6 min-h-fit text-center md:w-2/4">
          <h1
            className={`mb-4 text-5xl md:text-6xl dancingFont lg:text-8xl ${dancingFont.className}`}
          >
            {data.title}
          </h1>

          <div className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2" />
          <p
            className={`subtitle-white text-base md:text-lg tracking-wide ${subtitleFont.className}`}
          >
            {data.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
