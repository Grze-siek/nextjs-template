'use client';
import { Grid } from '@mui/material';
import { useState } from 'react';
import FilterService from './FilterService';
import ServiceCard from './ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';

type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  mostPopular: boolean;
  discounted: boolean;
};

const services: Service[] = [
  {
    id: '123',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: true,
    discounted: true,
  },
  {
    id: '1234',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: false,
    discounted: true,
  },
  {
    id: '12345',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: false,
    discounted: false,
  },
  {
    id: '123456',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: true,
    discounted: false,
  },
  {
    id: '1234567',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: true,
    discounted: true,
  },
  {
    id: '12345678',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: false,
    discounted: false,
  },
  {
    id: '123643456',
    title: 'Terapia bólu głowy',
    price: '136,00',
    description:
      'Pomaga w pozbyciu się bólu napięciowego, zatokowego i migreny. Głęboki masaż wybranych części ciała, mający na celu rozluźnienie, zwiększenie elastyczności i szybszą regenerację po wysiłku.',
    images: [
      'https://plus.unsplash.com/premium_photo-1682095156452-c1e897fe6d90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    ],
    mostPopular: true,
    discounted: false,
  },
];

export default function ServicesLayout() {
  const [filterOption, setFilterOption] = useState(1);

  const filteredServices = () => {
    switch (filterOption) {
      case 1:
        return services;
      case 2:
        return services.filter((service) => service.mostPopular === true);
      case 3:
        return services.filter((service) => service.discounted === true);
      default:
        return services;
    }
  };

  return (
    <>
      <FilterService
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        component={motion.div}
        layout
        xs={12}
        item
        container
        spacing={5}
        className="mb-10"
      >
        <AnimatePresence>
          {filteredServices().map((service) => {
            return (
              <Grid
                component={motion.div}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                key={service.id}
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <ServiceCard {...service} />
              </Grid>
            );
          })}
        </AnimatePresence>
      </Grid>
    </>
  );
}
