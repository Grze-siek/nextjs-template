import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { Rating } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type Testimonial = {
  userName: string;
  value: number;
  date: string;
  fromWhere: string;
  description: string;
  image: string;
};

export default function TestimonialCard({
  userName,
  value,
  date,
  fromWhere,
  description,
  image,
}: Testimonial) {
  return (
    <Card className="bg-white flex-shrink-0 w-[20rem] h-[28rem] my-4 drop-shadow-xl rounded-2xl  overflow-hidden">
      <CardContent className="flex flex-col justify-center py-14 px-12">
        <Typography
          variant="h5"
          gutterBottom
          className="relative text-center font-sans font-bold"
        >
          {userName}
          <div className="absolute h-[1px] bg-black w-14 -translate-x-1/2 -bottom-2 left-1/2" />
        </Typography>
        <Rating
          className="mx-auto my-4"
          name="read-only size-large"
          value={value}
          readOnly
        />
        <Typography
          variant="h5"
          color="text.secondary"
          component="div"
          className="mb-4 text-xs font-semibold font-sans text-center"
        >
          {date} | {fromWhere}
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
          <Image src={image} fill={true} alt={fromWhere} />
        </div>
      </CardContent>
    </Card>
  );
}
