import style from './ServiceCard.module.css';
import { motion } from 'framer-motion';

type Props = {
  onClick: () => void;
};

export default function Card({ onClick }: Props) {
  return (
    <motion.div
      layoutId={`card`}
      whileHover={{
        scale: 1.025,
        opacity: 1,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      initial={{ opacity: 0.7 }}
      onClick={onClick}
      className={`bg-white cursor-pointer mx-auto drop-shadow-xl rounded-2xl overflow-hidden ${style.noSelect}`}
    >
      <h1>Card title</h1>
    </motion.div>
  );
}
