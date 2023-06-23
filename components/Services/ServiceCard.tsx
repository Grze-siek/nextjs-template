import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type Service = {
  title: string;
  price: string;
  description: string;
  images: string[];
};

export default function ServiceCard({
  title,
  price,
  description,
  images,
}: Service) {
  return (
    <Card className="bg-white flex-shrink-0 max-w-[20rem] max-h-[28rem] mx-auto my-4 drop-shadow-xl rounded-2xl  overflow-hidden">
      <CardContent className="flex flex-col justify-center py-14 px-12">
        <Typography
          variant="h5"
          gutterBottom
          className="relative text-center font-sans font-bold"
        >
          {title}
          <div className="absolute h-[1px] bg-black w-14 -translate-x-1/2 -bottom-2 left-1/2" />
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          component="div"
          className="mb-4 text-xs font-semibold font-sans text-center"
        >
          {price} zł
        </Typography>
        <div className="h-[10rem] overflow-y-scroll">
          <Typography
            variant="h6"
            component="div"
            className="mb-4 text-base text-center overflow-y-auto"
          >
            {description}
          </Typography>
        </div>
        <div className="relative mx-auto w-40 h-16 overflow-hidden object-cover block">
          <Image src={images[0]} fill={true} alt={title} />
        </div>
      </CardContent>
    </Card>
  );
}
