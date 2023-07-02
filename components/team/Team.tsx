'use client';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { urlFor } from '../../lib/imageBuilder';
import styles from './Team.module.css';
import { Employee } from '../../typings';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@mui/material';

type TeamType = {
  data: Employee[];
};

export default function Team({ data }: TeamType) {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 450px)');
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(50);
  const [variant, setVariant] = useState<
    'woven' | 'masonry' | 'quilted' | 'standard' | undefined
  >('woven');

  useEffect(() => {
    const handleResize = () => {
      if (isDesktop) {
        setColumns(3); // Three columns for larger screens
        setGap(50);
        setVariant('woven');
      } else if (isTablet) {
        setColumns(2); // Two columns for tablet screens
        setGap(30);
        setVariant('masonry');
      } else {
        setColumns(2); // Two column for mobile screens
        setGap(8);
        setVariant('masonry');
      }
    };

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop, isTablet]);

  return (
    <>
      <ImageList
        sx={{
          width: '100%',
          height: '100%',
          minHeight: 'fit-content',
          overflowY: 'hidden',
        }}
        variant={variant}
        cols={columns}
        gap={gap}
      >
        {data?.map((item) => {
          const [ref, inView] = useInView({
            rootMargin: '-40% 0% -40% 0%',
            threshold: 0.2,
          });
          return (
            <ImageListItem key={item.image.asset._ref}>
              <div className={styles.wrapper}>
                <img
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  loading="lazy"
                  className={`${
                    inView && !isDesktop ? styles.blur : styles.gray
                  }`}
                  ref={ref}
                />
                {!isDesktop && (
                  <motion.div
                    initial={{ y: '-120%' }}
                    transition={{ duration: 0.5 }}
                    animate={{ y: inView ? 0 : '-120%' }}
                    className={`${styles.content} ${styles.slideDown} space-y-2 flex flex-col`}
                  >
                    <p className="text-left text-md">
                      {item.name} | {item.position}
                    </p>
                    <p className="text-left text-sm lg:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                )}
                {isDesktop && (
                  <div
                    className={`${styles.content} ${styles.slideDown} space-y-2 flex flex-col`}
                  >
                    <p className="text-left text-md">
                      {item.name} | {item.position}
                    </p>
                    <p className="text-left text-sm lg:text-base">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </ImageListItem>
          );
        })}
      </ImageList>
    </>
  );
}
