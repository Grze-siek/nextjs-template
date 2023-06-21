import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import SectionTitle from '../SectionTitle';
import styles from './Team.module.css';

export default function Team() {
  return (
    <div className="container mx-auto">
      <SectionTitle title={'Poznaj nasz zespół'} />
      <ImageList
        sx={{ width: '100%', height: '100%' }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {itemData?.map((item) => (
          <ImageListItem key={item.img}>
            <div className={styles.wrapper}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                className={styles.gray}
              />
              <div
                className={`${styles.content} ${styles.slideDown} space-y-2 flex flex-col`}
              >
                <p className="text-left text-md">{item.title}</p>
                <p className="text-left text-sm">{item.description}</p>
              </div>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Monika | Kosmetolog',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deserunt tempora perferendis. Neque voluptatibus expedita repellendus voluptatem laudantium ipsa sit!',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Jarek | Masazysta',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deserunt tempora perferendis. Neque voluptatibus expedita repellendus voluptatem laudantium ipsa sit!',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Pamela | Stylistka paznokci',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deserunt tempora perferendis. Neque voluptatibus expedita repellendus voluptatem laudantium ipsa sit!',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Ilona | Fryzjerka',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deserunt tempora perferendis. Neque voluptatibus expedita repellendus voluptatem laudantium ipsa sit!',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Patrycja | Stylistka rzęs',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deserunt tempora perferendis. Neque voluptatibus expedita repellendus voluptatem laudantium ipsa sit!',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Agnieszka | Fryzjer',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt deserunt tempora perferendis. Neque voluptatibus expedita repellendus voluptatem laudantium ipsa sit!',
  },
];
