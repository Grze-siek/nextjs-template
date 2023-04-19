import React, { useState } from 'react';
import styles from './slider.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { urlFor } from '../../lib/sanity-client';

function SliderBiggerScreen({ images }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    initial: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        // scale: 0.5,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
      // scale: 1,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        // scale: 0.5,
        // transition: 'ease-in',
        transition: {
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.2,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeIn',
      }}
      viewport={{
        once: true,
      }}
      className={styles.slideshow}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          src={urlFor(images[index])?.url()}
          alt="slides"
          className={styles.slides}
          key={images[index]}
          custom={direction}
        />
      </AnimatePresence>
      <button
        className={`${styles.btn} absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 shadow-md`}
        onClick={prevStep}
      >
        <HiOutlineArrowLeft className="text-gray-900 w-6 h-6 font-thin" />
      </button>
      <button
        className={`${styles.btn} absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 shadow-md`}
        onClick={nextStep}
      >
        <HiOutlineArrowRight className="text-gray-900 w-6 h-6 font-thin" />
      </button>
    </motion.div>
  );
}

export default SliderBiggerScreen;
