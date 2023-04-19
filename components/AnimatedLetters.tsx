'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  text: string;
  delayTime?: number;
};

const AnimatedTextCharacter = ({ text, delayTime = 0 }: Props) => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });

  const letters = Array.from(text);

  useEffect(() => {
    if (inView && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [inView, hasPlayed]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.04 * i,
        delay: delayTime,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: 'hidden',
        display: 'flex',
      }}
      variants={container}
      initial="hidden"
      animate={hasPlayed ? 'visible' : 'hidden'}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
