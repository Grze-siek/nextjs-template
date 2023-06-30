import React from 'react';
import PageBanner from '../../../components/PageBanner/PageBanner';
import SectionTitle from '../../../components/SectionTitle';
import ServicesLayout from '../../../components/Services/ServicesLayout';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import { Services } from '../../../typings';
import { client } from '../../../lib/sanity.cli';
import PreviewServicePage from '../../../components/Preview/PreviewServicePage';
import PreviewSuspense from '../../../components/Preview/PreviewSuspense';

const query = groq`
*[_type == 'beauty'][0] {
  ...,
  services[] -> {_id,title,price,isDiscount,priceAfterDiscount,durationOfService,description,isPakiet,image},
}
`;

export const metadata = {
  title: 'Odnowa | Zabiegi kosmetyczne',
};

export default async function page() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div
            role="status"
            className="inset-0 bg-slate-300 absolute z-[100] flex items-center justify-center"
          >
            <p className="text-center text-lg z-[110] animate-pulse font-semibold text-orange-400">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewServicePage query={query} />
      </PreviewSuspense>
    );
  }

  const data: Services = await client.fetch(query);

  return (
    <main>
      <PageBanner data={data} />
      <SectionTitle title={data.sectionTitle} subtitle={data.sectionSubtitle} />
      <ServicesLayout data={data.services} />
    </main>
  );
}
