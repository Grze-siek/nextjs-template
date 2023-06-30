'use client';
import { MutableRefObject } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import style from './LandingScrollButton.module.css';

type Props = {
  tag: MutableRefObject<null>;
};

export default function landingScrollButton({ tag }: Props) {
  const scroll = (tag: any) => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [-100, 0] }}
      transition={{
        ease: 'easeOut',
        duration: 0.4,
        delay: 1.5,
      }}
      className={`absolute cursor-pointer z-10 bottom-4 ${style.center}`}
    >
      <IoIosArrowDown
        onClick={() => scroll(tag)}
        className="animate-bounce h-10 w-10 text-white shadow-sm"
      />
    </motion.div>
  );
}
