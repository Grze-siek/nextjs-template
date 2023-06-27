'use client';
import React from 'react';
import { usePreview } from '../../lib/sanity.preview';
import PageBanner from '../PageBanner/PageBanner';
import SectionTitle from '../SectionTitle';
import ServicesLayout from '../Services/ServicesLayout';

type Props = {
  query: string;
};

export default function PreviewServicePage({ query }: Props) {
  const data = usePreview(null, query);
  return (
    <main>
      <PageBanner data={data} />
      <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} />
      <ServicesLayout data={data.services} />
    </main>
  );
}
