'use client';
import { Grid } from '@mui/material';
import { useState } from 'react';
import FilterService from './FilterService';
import ServiceCard from './ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../../typings';

type Props = {
  data: Service[];
};

export default function ServicesLayout({ data }: Props) {
  const [filterOption, setFilterOption] = useState(1);

  const filteredServices = () => {
    switch (filterOption) {
      case 1:
        return data;
      case 2:
        return data.filter((service) => service.isPopular === true);
      case 3:
        return data.filter((service) => service.isDiscount === true);
      default:
        return data;
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
        className="pb-10"
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
                key={service._id}
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <ServiceCard service={service} />
              </Grid>
            );
          })}
        </AnimatePresence>
      </Grid>
    </>
  );
}
