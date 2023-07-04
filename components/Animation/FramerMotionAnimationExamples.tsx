import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function FramerMotionAnimationExamples({}: Props) {
  return (
    <>
      <motion.div
        style={{ overflow: 'hidden' }}
        initial={{ width: 0 }}
        animate={{ width: '8rem' }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
        className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2"
      />
    </>
  );
}
