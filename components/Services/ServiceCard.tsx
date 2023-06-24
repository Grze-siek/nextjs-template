import {
  Box,
  Button,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

type Service = {
  title: string;
  price: string;
  description: string;
  images: string[];
};

const centerElementVariants: Variants = {
  initial: {
    opacity: 1,
    position: 'static',
    scale: 1,
    zIndex: 0,
  },
  animate: {
    opacity: 1,
    position: 'fixed',
    top: '50%',
    left: '50%',
    translateX: '-50%',
    translateY: '-50%',
    zIndex: 9999,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function ServiceCard({
  title,
  price,
  description,
  images,
}: Service) {
  const [isCentered, setIsCentered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const slicedImages = images.slice(0, 3);

  const handleClick = () => {
    if (!isAnimating) {
      setIsCentered(!isCentered);
      setIsAnimating(true);
    }
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  return (
    <AnimatePresence>
      {isCentered && (
        <motion.div
          className="backdrop fixed inset-0 bg-black/50 z-10"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
        ></motion.div>
      )}

      <Card
        component={motion.div}
        layout
        animate={isCentered ? 'animate' : 'initial'}
        variants={centerElementVariants}
        exit={{ transition: { duration: 1 } }}
        onClick={handleClick}
        onAnimationComplete={handleAnimationComplete}
        className={`bg-white cursor-pointer mx-auto drop-shadow-xl rounded-2xl overflow-hidden ${
          isCentered
            ? 'fixed top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 mx-auto'
            : 'static h-full'
        }`}
      >
        <CardContent
          component={motion.div}
          layout
          className="flex flex-col justify-center py-10 px-8"
        >
          <Typography
            variant="h6"
            gutterBottom
            className={`text-center font-sans font-bold ${
              isCentered ? 'text-2xl' : 'text-xl'
            }`}
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            className={`font-semibold font-sans my-2 text-center ${
              isCentered ? 'text-xl' : 'text-lg'
            }`}
          >
            {price} zł
          </Typography>

          {!isCentered ? (
            <>
              <div className="h-fit">
                <Typography
                  variant="h6"
                  component="div"
                  className="mb-4 text-base text-center line-clamp-3"
                >
                  {description}
                </Typography>
              </div>
              <div className="flex justify-between">
                {slicedImages.map((image, index) => (
                  <div
                    className="relative mx-auto rounded-md w-20 h-20 overflow-hidden object-cover block"
                    key={index + image}
                  >
                    <Image
                      src={image}
                      fill={true}
                      alt={title}
                      sizes="(max-width: 768px) 100%, (max-width: 1200px) 33%, 33%"
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[100]"
            >
              <div>
                <h3 className="mb-4 text-lg text-center">{description}</h3>
              </div>
              <ImageList
                sx={{ width: '100%', maxHeight: 'fit-content' }}
                cols={3}
                rowHeight={164}
              >
                {images.map((image, index) => (
                  <ImageListItem key={index + image}>
                    <div className="relative mx-auto rounded-md w-40 h-40 overflow-hidden object-cover block">
                      <Image src={image} fill={true} alt={title} />
                    </div>
                  </ImageListItem>
                ))}
              </ImageList>
              <Button variant="outlined" className="my-2 w-full mx-auto">
                Zarezerwuj
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </AnimatePresence>
  );
}
