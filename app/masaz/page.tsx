import React from 'react';
import PageBanner from '../../components/PageBanner';
import ServicesLayout from '../../components/Services/ServicesLayout';

type Props = {};

export default function page({}: Props) {
  return (
    <main>
      <PageBanner />
      <ServicesLayout />
    </main>
  );
}
