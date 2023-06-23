'use client';
import { Typography } from '@material-tailwind/react';
import Image from 'next/image';
import DiscountCarousel from './DiscountCarousel/DiscountCarousel';

type Props = {};

export default function LandingPanel({}: Props) {
  return (
    <div className="relative object-cover h-screen w-full">
      <Image
        src="https://images.unsplash.com/photo-1633681926019-03bd9325ec20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Welcome image"
        fill={true}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <div className="w-3/4 min-h-fit text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl font-sans"
          >
            Enjoy Exclusive Spa Center
          </Typography>
          <Typography variant="lead" color="white" className="mb-6 opacity-80">
            treat yourself to the beauty and health of our spas
          </Typography>
          <DiscountCarousel />
        </div>
      </div>
    </div>
  );
}
