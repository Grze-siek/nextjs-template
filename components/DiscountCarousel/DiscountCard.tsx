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

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

type Discount = {
  duration: string;
  title: string;
  image: string;
};

export default function DiscountCard({
  duration,
  title,
  image,
  setIsHoveringCard,
}: Discount & {
  setIsHoveringCard: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Card
      onMouseEnter={() => setIsHoveringCard(false)}
      onMouseLeave={() => setIsHoveringCard(true)}
      className="bg-white/70 w-full h-96 mb-4  shadow-md rounded-lg overflow-hidden"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          className="flex items-center space-x-4"
        >
          <TbDiscount2 className="h-10 w-10 text-darkred-color" />
          {duration}
        </Typography>
        <Typography variant="h5" component="div" className="mb-4">
          {title}
        </Typography>
        <div className="relative mx-auto rounded-md w-40 h-40 overflow-hidden object-cover block">
          <Image src={image} fill={true} alt={title} />
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          sx={{ color: red[800], borderColor: red[800] }}
          className="mx-auto mb-4 transition-opacity hover:opacity-80 hover:border-darkred-color"
        >
          Dowiedz się więcej
        </Button>
      </CardActions>
    </Card>
  );
}
