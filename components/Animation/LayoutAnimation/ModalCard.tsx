import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';

type Props = {
  handleCloseModal: () => void;
};

export default function ModalCard({ handleCloseModal }: Props) {
  const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    handleCloseModal();
  };
  return (
    <div
      className="backdrop fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
      onClick={handleClick}
    >
      <motion.div
        transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
        layoutId={`card`}
        onClick={handleClick}
        className="bg-white flex justify-center items-center cursor-default max-w-full h-[400px] md:h-[350px] md:w-[500px] lg:h-[400px] lg:w-[700px] overflow-y-scroll mx-auto my-auto drop-shadow-xl rounded-2xl"
      >
        <h1>Card title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea
          velit vero explicabo officia suscipit saepe magnam. Porro modi
          adipisci, quisquam, maxime aut nesciunt maiores sequi quod ea minus
          vitae!
        </p>
      </motion.div>
    </div>
  );
}
