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
    <Card
      onMouseEnter={() => setIsHoveringCard(false)}
      onMouseLeave={() => setIsHoveringCard(true)}
      onClick={() => {
        !isDesktop && router.push('#');
      }}
      className="bg-white/70 w-[30] lg:w-[40] h-64 lg:h-96 mb-2 lg:mb-4 cursor-pointer lg:cursor-default shadow-md rounded-lg overflow-hidden"
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          className="flex items-center space-x-4"
        >
          <TbDiscount2 className="w-8 h-8 lg:h-10 lg:w-10 text-darkred-color" />
          {data.duration}
        </Typography>
        <h3 className="mb-4 text-base lg:text-xl">{data.title}</h3>
        <div className="relative mx-auto rounded-full lg:rounded-md lg:w-40 w-[30] h-full overflow-hidden aspect-square object-cover block">
          <Image src={urlFor(data.image).url()} fill={true} alt={data.title} />
        </div>
      </CardContent>
      {isDesktop && (
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
      )}
    </Card>
  );
}
