'use client';

import { Dancing_Script, Open_Sans } from 'next/font/google';

const titleFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
});

const subtitleFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
});

export default function PageBanner() {
  return (
    <>
      <h1
        className={`mb-4 text-5xl md:text-6xl dancingFont lg:text-8xl ${titleFont.className}`}
      >
        Title
      </h1>

      <p
        className={`subtitle-white text-base md:text-lg tracking-wide ${subtitleFont.className}`}
      >
        Subtitle
      </p>
    </>
  );
}
