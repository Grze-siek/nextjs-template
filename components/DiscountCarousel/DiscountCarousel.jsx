'use client';
import Carousel from 'framer-motion-carousel';
import { useEffect, useRef, useState } from 'react';
import DiscountCard from './DiscountCard';
import { TbArrowLeftTail, TbArrowRightTail } from 'react-icons/tb';
// import { Discount } from '../../typings';
import { GrFormClose } from 'react-icons/gr';
import { AnimatePresence, motion } from 'framer-motion';

// type DotsProps = {
//   setActiveIndex: (index: number) => void;
//   activeIndex: number;
// };

// type DiscountDataProps = {
//   discounts: Discount[];
// };

const DiscountCarousel = ({ discounts }) => {
  const carouselRef = useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(true);
  const [closeButton, setCloseButton] = useState(false);
  const [openDiscountCard, setOpenDiscountCard] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCloseButton(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const Dots = ({ activeIndex, setActiveIndex }) => {
    return (
      <div
        className="absolute z-20 bottom-0 lg:bottom-0 left-1/2 -translate-x-1/2"
        style={{ display: 'flex', gap: '10px' }}
      >
        {discounts.map((_, index) => (
          <button key={index} onClick={() => setActiveIndex(index)}>
            <div
              className={`rounded-md h-1 bg-darker-color transition-all ${
                activeIndex === index ? 'w-12' : 'w-6'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {openDiscountCard && (
          <motion.div
            exit={{ opacity: 0, duration: 0.4 }}
            className="relative overflow-hidden h-[400] w-11/12 md:w-1/2 mx-auto max-w-[300px]"
          >
            {closeButton && (
              <GrFormClose
                onClick={() => setOpenDiscountCard(false)}
                className="h-5 w-5 z-50 rounded-full absolute top-1 right-1 bg-white/50 text-gray-800 cursor-pointer transition-all hover:scale-110"
              />
            )}

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
                <Dots
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              )}
            >
              {discounts.map((discount) => (
                <DiscountCard
                  key={discount._id}
                  data={discount}
                  setIsHoveringCard={setIsHoveringCard}
                />
              ))}
            </Carousel>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default DiscountCarousel;