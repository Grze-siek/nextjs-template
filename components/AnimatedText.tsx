'use client';
import { motion } from 'framer-motion';

type Props = {
  text: string;
  delayTime?: number;
};

function AnimatedText({ text, delayTime = 0 }: Props) {
  const words = text?.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
      y: -20,
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
        overflow: 'auto',
        overflowWrap: 'break-word',
        paddingTop: '5px',
        paddingBottom: '5px',
      }}
      variants={container}
      initial="hidden"
      transition={{ delay: delayTime }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {words?.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word + ' '}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
