'use client';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { urlFor } from '../../lib/imageBuilder';
import styles from './Team.module.css';
import { Employee } from '../../typings';
import { useEffect, useState } from 'react';

type TeamType = {
  data: Employee[];
};

export default function Team({ data }: TeamType) {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(50);
  const [variant, setVariant] = useState<
    'woven' | 'masonry' | 'quilted' | 'standard' | undefined
  >('woven');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 960) {
        setColumns(3); // Three columns for larger screens
        setGap(50);
        setVariant('woven');
      } else if (screenWidth >= 450) {
        setColumns(2); // Two columns for tablet screens
        setGap(30);
        setVariant('masonry');
      } else {
        setColumns(1); // One column for mobile screens
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
  }, []);
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
        {data?.map((item) => (
          <ImageListItem key={item.image.asset._ref}>
            <div className={styles.wrapper}>
              <img
                src={urlFor(item.image).url()}
                alt={item.name}
                loading="lazy"
                className={styles.blur}
              />
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
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
