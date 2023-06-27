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
import { urlFor } from '../../lib/imageBuilder';
import { Image as SanityImage, Service } from '../../typings';

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

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  const [isCentered, setIsCentered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const slicedImages = service.image.slice(0, 3);

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
            {service.title}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            className={`font-semibold font-sans my-2 text-center ${
              isCentered ? 'text-xl' : 'text-lg'
            }`}
          >
            {service.price}
          </Typography>

          {!isCentered ? (
            <>
              <div className="h-fit">
                <Typography
                  variant="h6"
                  component="div"
                  className="mb-4 text-base text-center line-clamp-3"
                >
                  {service.description}
                </Typography>
              </div>
              <div className="flex justify-between">
                {slicedImages.map((image: SanityImage) => (
                  <div
                    className="relative mx-auto rounded-md w-20 h-20 overflow-hidden object-cover block"
                    key={image._key}
                  >
                    <Image
                      src={urlFor(image).url()}
                      fill={true}
                      alt={service.title}
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
                <h3 className="mb-4 text-lg text-center">
                  {service.description}
                </h3>
              </div>
              <ImageList
                sx={{ width: '100%', maxHeight: 'fit-content' }}
                cols={3}
                rowHeight={164}
              >
                {service.image.map((image: SanityImage) => (
                  <ImageListItem key={image._key}>
                    <div className="relative mx-auto rounded-md w-40 h-40 overflow-hidden object-cover block">
                      <Image
                        src={urlFor(image).url()}
                        fill={true}
                        alt={service.title}
                      />
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
