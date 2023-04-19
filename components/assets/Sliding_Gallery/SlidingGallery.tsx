'use client'
import { urlFor } from '../../../lib/sanity-client';
import { Image as SlidingImage } from '../../../typings';
import styles from './SlidingGallery.module.scss';

type Props = {
  images: SlidingImage[];
};

function SlidingGallery({ images }: Props) {
  return (
      <div className={styles.gallery}>
      {images?.map((image, index) => (
          <img
          key={image._key}
            src={urlFor(image).url()}
            alt={`Photo ${index}`}
          />
      ))}
      </div>
  );
}

export default SlidingGallery;
