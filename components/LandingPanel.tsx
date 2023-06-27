'use client';
import Image from 'next/image';
import DiscountCarousel from './DiscountCarousel/DiscountCarousel';
import { Dancing_Script, Open_Sans } from 'next/font/google';
import { Discount, Home } from '../typings';
import { urlFor } from '../lib/imageBuilder';
import { useRef } from 'react';
import LandingScrollButton from './assets/LandingScrollButton';

const dancingFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

const subtitleFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
});

type LandingPanelProps = {
  data: Home;
  discountData: Discount[];
};

export default function LandingPanel({
  data,
  discountData,
}: LandingPanelProps) {
  const servicesRef = useRef(null);
  return (
    <div className="relative object-cover h-screen w-full">
      <Image
        src={urlFor(data.landingImage).url()}
        alt={data.landingTitle}
        fill={true}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-5/6 min-h-fit text-center md:w-2/4">
          <h1
            className={`mb-4 text-3xl md:text-4xl dancingFont lg:text-6xl ${dancingFont.className}`}
          >
            {data.landingTitle}
          </h1>
          <div className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2" />
          <p
            className={`subtitle-white text-base md:text-lg tracking-wide ${subtitleFont.className}`}
          >
            {data.landingSubtitle}
          </p>
          <DiscountCarousel discounts={discountData} />
        </div>
      </div>
      <LandingScrollButton tag={servicesRef} />
      <div
        ref={servicesRef}
        className="absolute"
        style={{ bottom: '30px' }}
        id="services"
      />
    </div>
  );
}
