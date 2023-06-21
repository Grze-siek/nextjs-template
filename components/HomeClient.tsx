'use client';

import { Button, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import ScrollButton from './assets/ScrollButton';
import DiscountCarousel from './DiscountCarousel/DiscountCarousel';
import ServicesTab from './Services';
import Team from './team/Team';
import Contact from './Contact/Cantact';
import Testimonials from './Testimonial/TestimonialCarousel';

type Props = {};

export default function HomeClient({}: Props) {
  const params = useSearchParams();
  const router = useRouter();
  // refs
  const servicesRef = useRef(null),
    teamRef = useRef(null),
    productsRef = useRef(null),
    contactRef = useRef(null);
  const id = params.get('id');
  useEffect(() => {
    if (id === 'services') {
      scroll(servicesRef);
      router.replace('/', undefined);
    }
    if (id === 'products') {
      scroll(productsRef);
      router.replace('/', undefined);
    }
    if (id === 'team') {
      scroll(teamRef);
      router.replace('/', undefined);
    }
    if (id === 'contact') {
      scroll(contactRef);
      router.replace('/', undefined);
    }
  }, [id]);
  const scroll = (tag: any) => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <>
      <div className="relative object-cover h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1633681926019-03bd9325ec20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image 1"
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
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80"
            >
              treat yourself to the beauty and health of our spas
            </Typography>
            <DiscountCarousel />
          </div>
        </div>
      </div>
      <div className="content relative">
        <div className="relative">
          <div
            ref={servicesRef}
            className="absolute"
            style={{ top: '-170px' }}
            id="services"
          />
          <ServicesTab />
        </div>
        <div className="relative">
          <div ref={teamRef} className="absolute" style={{ top: '-170px' }} />
          <Team />
        </div>
        <div className="relative">
          <div
            ref={productsRef}
            className="absolute"
            style={{ top: '-170px' }}
          />
        </div>
        <div className="relative">
          <div
            ref={contactRef}
            className="absolute"
            style={{ top: '-170px' }}
          />
          <Testimonials />
        </div>
        <div className="relative">
          <div
            ref={contactRef}
            className="absolute"
            style={{ top: '-170px' }}
          />
          <Contact />
        </div>
      </div>
      <ScrollButton />
    </>
  );
}
