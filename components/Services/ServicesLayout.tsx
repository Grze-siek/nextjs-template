'use client';
import { Grid } from '@mui/material';
import ServiceCard from './ServiceCard';

type Service = {
  title: string;
  price: string;
  description: string;
  images: string[];
};

const services: Service[] = [
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
  {
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
  },
];

export default function ServicesLayout() {
  return (
    <Grid lg={12} item container spacing={5}>
      {services.map((service) => {
        return (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <ServiceCard {...service} />
          </Grid>
        );
      })}
    </Grid>
  );
}
