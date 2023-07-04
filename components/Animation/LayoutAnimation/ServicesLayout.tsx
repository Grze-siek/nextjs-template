'use client';
import { useEffect, useState, useRef } from 'react';
import ServiceCard from './Card';
import { AnimatePresence } from 'framer-motion';
import ModalCard from './ModalCard';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function ServicesLayout() {
  const [modalOpen, setModalOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const handleOpenModal = () => {
    setModalOpen(true);
    if (bodyRef.current) {
      disableBodyScroll(bodyRef.current);
    }
  };

  const handleCloseModal: any = () => {
    setModalOpen(false);
    if (bodyRef.current) {
      enableBodyScroll(bodyRef.current);
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpen]);

  return (
    <>
      <AnimatePresence>
        <ServiceCard onClick={() => handleOpenModal} />
      </AnimatePresence>
      <ModalCard handleCloseModal={handleCloseModal} />
    </>
  );
}
