import { AnimatePresence, motion } from 'framer-motion';

type Props = {};

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

export default function LettersAnimation({}: Props) {
  const title = 'Amazing title';
  const subtitle = 'Amazing subtitle';
  return (
    <>
      <motion.span
        key="landingTitle"
        variants={sentence}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="mb-4 text-3xl md:text-4xl dancingFont lg:text-6xl"
      >
        {title.split('').map((char, index) => {
          return (
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.span>

      <motion.p
        key="landingSubtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="subtitle-white text-base md:text-lg tracking-wide"
      >
        {subtitle}
      </motion.p>
    </>
  );
}
