'use client';
import Carousel from 'framer-motion-carousel';
import React, { useState } from 'react';
import DiscountCard from './DiscountCard';
import { TbArrowLeftTail, TbArrowRightTail } from 'react-icons/tb';

const discounts = [
  {
    duration: 'Promocja do końca tygodnia',
    title: '20% znizki na masaz klasyczny',
    image:
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    duration: 'Promocja do końca miesiąca',
    title: '15% znizki na makijaz permamentny',
    image:
      'https://images.unsplash.com/photo-1594647210801-5124307f3d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  },
  {
    duration: 'Promocja w kazdy czwartek',
    title: 'Strzyzenie męskie za 50zł',
    image:
      'https://images.unsplash.com/photo-1635273051839-003bf06a8751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
];

type DotsProps = {
  setActiveIndex: (index: number) => void;
  activeIndex: number;
};

const Dots = ({ activeIndex, setActiveIndex }: DotsProps) => {
  return (
    <div
      className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2"
      style={{ display: 'flex', gap: '10px' }}
    >
      <button onClick={() => setActiveIndex(0)}>
        <div
          className={`rounded-md h-1 bg-darker-color transition-all ${
            activeIndex === 0 ? 'w-12' : 'w-6'
          }`}
        />
      </button>
      <button onClick={() => setActiveIndex(1)}>
        <div
          className={`rounded-md h-1 bg-darker-color transition-all ${
            activeIndex === 1 ? 'w-12' : 'w-6'
          }`}
        />
      </button>
      <button onClick={() => setActiveIndex(2)}>
        <div
          className={`rounded-md h-1 bg-darker-color transition-all ${
            activeIndex === 2 ? 'w-12' : 'w-6'
          }`}
        />
      </button>
    </div>
  );
};

const DiscountCarousel = () => {
  const carouselRef = React.useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(true);
  return (
    <>
      <div
        // style={{ width: 400, height: 400, margin: '0 auto' }}
        className="relative overflow-hidden h-[400] md:w-10/12 lg:w-1/2 mx-auto"
      >
        <button
          onClick={() => carouselRef.current.handlePrev()}
          className="absolute top-1/2 left-2 z-20 -translate-y-1/2 bg-darker-color rounded-full hover:opacity-80"
        >
          <TbArrowLeftTail className="h-8 w-8 p-2 text-white" />
        </button>
        <button
          onClick={() => carouselRef.current.handleNext()}
          className="absolute top-1/2 right-2 z-20 -translate-y-1/2 bg-darker-color rounded-full hover:opacity-80"
        >
          <TbArrowRightTail className="h-8 w-8 p-2 text-white" />
        </button>

        <Carousel
          ref={carouselRef}
          autoPlay={isHoveringCard}
          interval={4000}
          renderArrowLeft={() => <></>}
          renderArrowRight={() => <></>}
          renderDots={({ activeIndex, setActiveIndex }) => (
            <Dots activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          )}
        >
          {discounts.map((discount, i) => (
            <DiscountCard
              key={i}
              duration={discount.duration}
              title={discount.title}
              image={discount.image}
              setIsHoveringCard={setIsHoveringCard}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default DiscountCarousel;
