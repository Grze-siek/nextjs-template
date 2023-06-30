import {
  Button,
  Card,
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import { brown } from '@mui/material/colors';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { urlFor } from '../../lib/imageBuilder';
import { Image as SanityImage, Service } from '../../typings';

type Props = {
  selected: Service | null;
  setSelected: Dispatch<SetStateAction<Service | null>>;
};

export default function ModalCard({ selected, setSelected }: Props) {
  if (!selected) {
    return <></>;
  }
  return (
    <div
      className="backdrop fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
      onClick={(e) => {
        e.stopPropagation();
        setSelected(null);
      }}
    >
      <motion.div
        transition={{ type: 'spring', bounce: 0.1, duration: 0.5 }}
        layoutId={`card-${selected._id}`}
        onClick={() => setSelected(null)}
        className="bg-white cursor-default w-full max-w-[700px] max-h-[400px] overflow-y-scroll mx-auto my-auto drop-shadow-xl rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col justify-center py-10 px-8">
          <h3 className="text-center font-sans font-bold text-2xl">
            {selected.title}
          </h3>

          {selected.isDiscount ? (
            <div className="flex justify-center items-center space-x-3 mt-2">
              <p
                className={`font-semibold text-gray-500 font-sans text-center text-lg ${
                  selected.isDiscount &&
                  'line-through decoration-2 decoration-black/60'
                }`}
              >
                {selected.price}
              </p>
              <p className="font-semibold text-gray-500 font-sanstext-center text-xl">
                {selected.priceAfterDiscount}
              </p>
            </div>
          ) : (
            <p className="font-semibold text-gray-500 font-sans mt-2 text-center text-xl">
              {selected.price}
            </p>
          )}

          <p className="font-normal text-gray-500 font-sans mb-2 text-center text-lg">
            {selected.durationOfService}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-[100]"
          >
            <div>
              <h3 className="mb-4 text-lg text-center">
                {selected.description}
              </h3>
            </div>
            <ImageList
              sx={{ width: '100%', maxHeight: 'fit-content' }}
              cols={3}
              rowHeight={164}
            >
              {selected.image.map((image: SanityImage) => (
                <ImageListItem key={image._key}>
                  <div className="relative mx-auto rounded-md w-40 h-40 overflow-hidden object-cover block">
                    <Image
                      src={urlFor(image).url()}
                      fill={true}
                      alt={selected.title}
                    />
                  </div>
                </ImageListItem>
              ))}
            </ImageList>
            <a
              target="_blank"
              href="https://booksy.com/pl-pl/155907_studio-urody-i-masazu-odnowa_salon-kosmetyczny_15108_kobierzyce"
            >
              <Button
                type="button"
                variant="outlined"
                sx={{
                  color: brown[600],
                  borderColor: brown[600],
                  hoveredColor: brown[400],
                }}
                className="my-2 w-full mx-auto hover:border-yellow-900"
              >
                Zarezerwuj
              </Button>
            </a>
            <p className="text-xs">
              <span className="text-md text-darker-color mr-1">*</span>Po
              nasiśnięciu zostaniesz przekierowany do Booksy
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
