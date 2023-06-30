'use client';
import Image from 'next/image';
import DiscountCarousel from './DiscountCarousel/DiscountCarousel';
import { Dancing_Script, Open_Sans } from 'next/font/google';
import { Discount, Home } from '../typings';
import { urlFor } from '../lib/imageBuilder';
import { useEffect, useRef, useState } from 'react';
import LandingScrollButton from './assets/LandingScrollButton';
import { AnimatePresence, motion } from 'framer-motion';
import useIntro from '../hooks/useIntro';
import useMediaQuery from '../hooks/useMediaQuery';

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

const showAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function LandingPanel({
  data,
  discountData,
}: LandingPanelProps) {
  const servicesRef = useRef(null);
  const showAnimation = useIntro();
  const MotionScrollButton = motion(LandingScrollButton);
  const MotionDiscountCarousel = motion(DiscountCarousel);
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
    <div className="relative object-cover h-screen w-full">
      <Image
        src={urlFor(data.landingImage).url()}
        alt={data.landingTitle}
        fill={true}
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
        <motion.div
          key="parent"
          transition={{
            delayChildren: 0.4,
            staggerChildren: 0.1,
          }}
          className="w-5/6 min-h-fit text-center md:w-2/4"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key="landingTitle"
              variants={sentence}
              initial={showAnimation ? 'hidden' : 'visible'}
              animate={showAnimation && 'visible'}
              transition={{ delay: 0.5 }}
              className={`mb-4 text-3xl md:text-4xl dancingFont lg:text-6xl ${dancingFont.className}`}
            >
              {data.landingTitle.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
            <motion.div
              style={{ overflow: 'hidden' }}
              initial={{ width: 0 }}
              animate={{ width: lineWidth }}
              transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
              key={'line'}
              className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2"
            />
            <motion.p
              key="landingSubtitle"
              initial={showAnimation && { opacity: 0 }}
              animate={showAnimation && { opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className={`subtitle-white text-base md:text-lg tracking-wide ${subtitleFont.className}`}
            >
              {data.landingSubtitle}
            </motion.p>
            <MotionDiscountCarousel
              key="DiscountCarousel"
              initial={showAnimation && { opacity: 0 }}
              animate={showAnimation && { opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.5,
              }}
              discounts={discountData}
            />
          </AnimatePresence>
        </motion.div>
      </div>
      <MotionScrollButton
        key="scrollButton"
        initial={showAnimation && { opacity: 0, y: -100 }}
        animate={showAnimation && { opacity: 1, y: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.5,
          delay: 2,
        }}
        tag={servicesRef}
      />
      <div
        ref={servicesRef}
        className="absolute"
        style={{ bottom: '30px' }}
        id="services"
      />
    </div>
  );
}
