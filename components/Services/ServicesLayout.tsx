'use client';
import { Grid } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import FilterService from './FilterService';
import ServiceCard from './ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../../typings';
import useMediaQuery from '../../hooks/useMediaQuery';
import ModalCard from './ModalCard';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

type Props = {
  data: Service[];
};

export default function ServicesLayout({ data }: Props) {
  const [filterOption, setFilterOption] = useState(1);
  const [gridGap, setGridGap] = useState(2);
  const [selected, setSelected] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isSmartphone = useMediaQuery('(min-width: 600px)');

  const handleOpenModal = (service: Service) => {
    setSelected(service);
    setModalOpen(true);
    if (bodyRef.current) {
      disableBodyScroll(bodyRef.current);
    }
  };

  const handleCloseModal: any = () => {
    setSelected(null);
    setModalOpen(false);
    if (bodyRef.current) {
      enableBodyScroll(bodyRef.current);
    }
  };

  const filteredServices = () => {
    switch (filterOption) {
      case 1:
        return data;
      case 2:
        return data.filter((service) => service.isPakiet === true);
      case 3:
        return data.filter((service) => service.isDiscount === true);
      default:
        return data;
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  useEffect(() => {
    const setGridGapValue = () => {
      if (isDesktop) {
        // Set grid gap to 5 for desktop
        return 5;
      } else if (isTablet) {
        // Set grid gap to 3 for tablet
        return 3;
      } else if (isSmartphone) {
        // Set grid gap to 2 for smartphone
        return 2;
      } else {
        // Set default grid gap value
        return 2;
      }
    };
    setGridGap(setGridGapValue);
  }, [isDesktop, isTablet, isSmartphone]);

  return (
    <>
      <div className="mb-6 md:mb-8 lg:mb-10">
        <FilterService
          filterOption={filterOption}
          setFilterOption={setFilterOption}
        />
      </div>
      {data && filteredServices().length !== 0 ? (
        <>
          <Grid
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            component={motion.div}
            layout
            container
            spacing={gridGap}
            width={'100%'}
            marginX="auto"
            alignContent="center"
            ref={bodyRef}
            className="pb-10 pr-4 md:pr-6 lg:pr-10 mx-auto"
          >
            <AnimatePresence>
              {filteredServices().map((service, index) => {
                return (
                  <Grid
                    component={motion.div}
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    layout
                    key={service && service._id ? service._id : index}
                    item
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                  >
                    <ServiceCard
                      service={service}
                      onClick={() => handleOpenModal(service)}
                    />
                  </Grid>
                );
              })}
            </AnimatePresence>
          </Grid>
          <ModalCard selected={selected} handleCloseModal={handleCloseModal} />
        </>
      ) : (
        <motion.h3
          initial={{
            x: '-10%',
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            bounce: 0.1,
            duration: 0.5,
          }}
          className="container mb-10 mx-auto w-full text-center text-md text-gray-900 text-semibold md:text-base lg:text-lg"
        >
          W tej chwili nie mamy żadnej oferty z wybranej kategorii. Odwiedź nas
          później!{' '}
        </motion.h3>
      )}
    </>
  );
}
