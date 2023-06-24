import React from 'react';
import PageBanner from '../../components/PageBanner';
import SectionTitle from '../../components/SectionTitle';
import ServicesLayout from '../../components/Services/ServicesLayout';

type Props = {};

const title = 'Our massage services';
const subtitle = 'more than 20 services to suit all tastes';

export default function page({}: Props) {
  return (
    <main>
      <PageBanner />
      <SectionTitle title={title} subtitle={subtitle} />
      <ServicesLayout />
    </main>
  );
}
