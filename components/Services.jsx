'use client';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { Button } from '@mui/material';
import { brown } from '@mui/material/colors';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from './SectionTitle';

export default function ServicesTab() {
  const data = [
    {
      label: 'Zabiegi kosmetyczne',
      image:
        'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
      value: 'zabiegi_kosmetyczne',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque voluptatum doloremque ducimus, alias velit perferendis mollitia quae laboriosam, consequatur distinctio. Sequi eveniet sunt nemo voluptates aliquid voluptatum iste quia, minima itaque possimus tempore doloremque quisquam nesciunt tempora quidem expedita quae dolore? Rerum corrupti vero eum consequatur sequi vitae deleniti!`,
      link: '/zabiegi_kosmetyczne',
    },
    {
      label: 'Masaze i terapie',
      image:
        'https://images.unsplash.com/photo-1542848284-8afa78a08ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
      value: 'masaz',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque voluptatum doloremque ducimus, alias velit perferendis mollitia quae laboriosam, consequatur distinctio. Sequi eveniet sunt nemo voluptates aliquid voluptatum iste quia, minima itaque possimus tempore doloremque quisquam nesciunt tempora quidem expedita quae dolore? Rerum corrupti vero eum consequatur sequi vitae deleniti!`,
      link: '/masaz',
    },

    {
      label: 'Fryzjer',
      image:
        'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=626&q=80',
      value: 'fryzjer',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque voluptatum doloremque ducimus, alias velit perferendis mollitia quae laboriosam, consequatur distinctio. Sequi eveniet sunt nemo voluptates aliquid voluptatum iste quia, minima itaque possimus tempore doloremque quisquam nesciunt tempora quidem expedita quae dolore? Rerum corrupti vero eum consequatur sequi vitae deleniti!`,
      link: '/fryzjer',
    },

    {
      label: 'Zajęcia ruchowe',
      image:
        'https://plus.unsplash.com/premium_photo-1663127391161-aaf4e4d52ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
      value: 'zajęcia_ruchowe',
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque voluptatum doloremque ducimus, alias velit perferendis mollitia quae laboriosam, consequatur distinctio. Sequi eveniet sunt nemo voluptates aliquid voluptatum iste quia, minima itaque possimus tempore doloremque quisquam nesciunt tempora quidem expedita quae dolore? Rerum corrupti vero eum consequatur sequi vitae deleniti!`,
      link: '/zajecia_ruchowe',
    },
  ];

  const primary = '#ede6dd';

  return (
    <div className="container mx-auto">
      <SectionTitle title={'Nasze usługi'} />
      <Tabs
        id="custom-animation"
        value="zabiegi_kosmetyczne"
        className="shadow-md"
      >
        <TabsHeader>
          {data.map(({ label, value, image }) => (
            <Tab
              key={value}
              value={value}
              className="w-full h-full py-4 flex justify-center bg-light-color rounded-t-md"
            >
              <div className="relative flex justify-center items-center mx-auto rounded-full w-36 h-36 object-cover mb-4 overflow-hidden">
                <Image
                  src={image}
                  alt={label}
                  fill={true}
                  className="mx-auto"
                ></Image>
              </div>
              <div className="text-md font-semibold uppercase text-center">
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc, link }) => (
            <TabPanel key={value} value={value}>
              <div className="flex flex-col items-center py-4 px-8">
                <h3 className="text-lg leading-8  font-normal mb-4">{desc}</h3>
                <Link href={link}>
                  <Button
                    variant="outlined"
                    sx={{ color: brown[600], borderColor: brown[600] }}
                  >
                    Dowiedz się więcej
                  </Button>
                </Link>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
