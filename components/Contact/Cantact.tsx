import React from 'react';
import SectionTitle from '../SectionTitle';
import ContactTable from './ContactTable';
import Map from './Map';

type Props = {};

export default function Cantact({}: Props) {
  return (
    <>
      <SectionTitle title={'Skontaktuj się'} />
      <section className="container rounded-2xl mx-auto flex h-[45rem] mb-12 flex-col border-b-gray-700 border-b-[1px] md:border-8 md:border-light-color md:space-x-6 md:flex-row-reverse md:h-[28rem]">
        <div className="relative w-full  md:w-1/2 h-1/2 md:h-full">
          <div className="absolute top-0 left-0 w-full rounded-2xl  h-full shadow-md overflow-hidden">
            <Map />
          </div>
        </div>

        <ContactTable />
      </section>
    </>
  );
}
