'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Dancing_Script, Open_Sans } from 'next/font/google';
import { Services } from '../../typings';
import { urlFor } from '../../lib/imageBuilder';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

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
  const [lineWidth, setLineWidth] = useState('4rem');

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isSmartphone = useMediaQuery('(min-width: 600px)');

  useEffect(() => {
    if (isDesktop) {
      setLineWidth('8rem');
    } else if (isTablet) {
      setLineWidth('6rem');
    } else if (isSmartphone) {
      setLineWidth('4rem');
    }
  }, []);

  return (
    <div className="relative wrapper  h-[60vh] w-full">
      {data && data.image && (
        <Image
          src={urlFor(data.image).url()}
          alt={data.title}
          style={{ objectFit: 'cover' }}
          fill={true}
        />
      )}

      <div className="absolute grid h-full w-full place-items-center bg-black/50">
        <div className="w-5/6 min-h-fit text-center md:w-2/4">
          {data && data.title && (
            <h1
              className={`mb-4 text-5xl md:text-6xl dancingFont lg:text-8xl ${dancingFont.className}`}
            >
              {data.title}
            </h1>
          )}

          <motion.div
            style={{ overflow: 'hidden' }}
            initial={{ width: 0 }}
            animate={{ width: lineWidth }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2"
          />
          {data && data.subtitle && (
            <p
              className={`subtitle-white text-base md:text-lg tracking-wide ${subtitleFont.className}`}
            >
              {data.subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
