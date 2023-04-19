import Link from 'next/link';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <section className="relative h-[600px] bg-light-color flex justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center mx-16 space-y-8 p-12 border border-darkred-color">
        <h1 className="max-w-md md:max-w-xl text-4xl lg:text-6xl text-center">
          This page is currently under construction.
        </h1>
        <p>We're adding new features for you</p>
      </div>
      <img
        src="/background_flowers.svg"
        className="absolute h-auto md:h-4/6 w-full bottom-0 left-0 opacity-20 transform -translate-x-1/3"
      />
      <img
        src="/background_flowers.svg"
        className="absolute h-auto md:h-4/6 w-full mirror top-0 right-0 opacity-20 rotate-180 translate-x-1/3"
      />
    </section>
  );
}

export default page;
