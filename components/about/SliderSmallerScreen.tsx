import Image from 'next/image';
import { urlFor } from '../../lib/sanity-client';
import { Image as SlidingImage } from '../../typings';

type Props = {
  images: SlidingImage[];
};

function SliderSmallerScreen({ images }: Props) {
  return (
    <>
      <div className="carousel w-full">
        {images?.map((image, index) => (
          <div
            key={image._key}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <img
              src={urlFor(image).url()}
              alt={`Photo ${index}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {images?.map((image, index) => (
          <a key={image._key} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
}

export default SliderSmallerScreen;
