import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TbDiscount2 } from 'react-icons/tb';
import Image from 'next/image';
import { red } from '@mui/material/colors';
import { Discount } from '../../typings';
import { urlFor } from '../../lib/imageBuilder';
import useMediaQuery from '../../hooks/useMediaQuery';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type DiscountType = {
  data: Discount;
};

export default function DiscountCard({
  data,
  setIsHoveringCard,
}: DiscountType & {
  setIsHoveringCard: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setIsHoveringCard(false)}
      onMouseLeave={() => setIsHoveringCard(true)}
      onClick={() => {
        !isDesktop && router.push(data.path);
      }}
      className="flex flex-col items-start lg:items-center my-auto bg-white/70 w-[30] lg:w-[40] h-64 lg:h-96 p-2 lg:p-4 lg:mb-4 cursor-pointer lg:cursor-default shadow-md rounded-lg overflow-hidden"
    >
      <div className="m-auto">
        <h3 className="flex text-sm lg:text-base text-gray-600 items-center space-x-2 lg:space-x-4">
          <TbDiscount2 className="w-8 h-8 lg:h-10 lg:w-10 text-darkred-color" />
          <span>{data.duration}</span>
        </h3>
        <h3 className="mb-4 mx-auto text-center text-lg lg:text-xl">
          {data.title}
        </h3>
        <div className="relative m-auto rounded-full lg:rounded-md lg:w-40 lg:h-40 w-[8rem] h-[8rem] overflow-hidden object-cover block">
          <Image src={urlFor(data.image).url()} fill={true} alt={data.title} />
        </div>
        {isDesktop && (
          <div className="flex mt-4 justify-center items-center">
            <Link href={data.path}>
              <Button
                variant="outlined"
                size="small"
                sx={{ color: red[800], borderColor: red[800] }}
                className="mx-auto transition-opacity hover:opacity-80 hover:border-darkred-color"
              >
                Dowiedz się więcej
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
