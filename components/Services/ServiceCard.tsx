import style from './ServiceCard.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { urlFor } from '../../lib/imageBuilder';
import { Image as SanityImage, Service } from '../../typings';

type Props = {
  service: Service;
  onClick: () => void;
};

export default function ServiceCard({ service, onClick }: Props) {
  const slicedImages =
    service && service.image ? service.image.slice(0, 3) : null;

  return (
    <motion.div
      layoutId={`card-${service ? service._id : null}`}
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
      <div className="flex flex-col justify-center py-10 px-8">
        {service && (
          <h3 className="text-center font-sans font-bold text-xl">
            {service.title}
          </h3>
        )}

        {service &&
          (service.isDiscount ? (
            <div className="flex justify-center items-center space-x-3 mt-2">
              <p
                className={`font-semibold font-sans text-center text-base ${
                  service.isDiscount &&
                  'line-through text-gray-500 decoration-2 decoration-black/60'
                }`}
              >
                {service.price}
              </p>
              {service && (
                <p className="font-semibold text-gray-500 font-sanstext-center text-lg">
                  {service.priceAfterDiscount}
                </p>
              )}
            </div>
          ) : (
            <p className="font-semibold text-gray-500 font-sans mt-2 text-center text-lg">
              {service.price}
            </p>
          ))}

        {service && (
          <p className="font-normal text-gray-500 font-sans mb-2 text-center text-base">
            {service.durationOfService}
          </p>
        )}

        <div className="h-fit">
          {service && (
            <h3 className="mb-4 text-base text-center line-clamp-3">
              {service.description}
            </h3>
          )}
        </div>
        <div className="flex justify-between">
          {slicedImages &&
            slicedImages.map((image: SanityImage) => (
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
      </div>
    </motion.div>
  );
}
