'use client';

import { usePreview } from '../../lib/sanity.preview';
import ScrollButton from '../assets/ScrollButton';
import LandingPanel from '../LandingPanel';
import ServicesTab from '../Services';
import Team from '../team/Team';
import Testimonials from '../../components/Testimonial/TestimonialCarousel';
import Contact from '../../components/Contact/Cantact';
import SectionTitle from '../SectionTitle';

type Props = {
  queryHome: string;
  queryDiscounts: string;
  queryServicesTab: string;
  queryTeam: string;
  queryTestimonials: string;
};

export default function PreviewHomePage({
  queryHome,
  queryDiscounts,
  queryServicesTab,
  queryTeam,
  queryTestimonials,
}: Props) {
  const homeData = usePreview(null, queryHome);
  const res = usePreview(null, queryDiscounts);
  const DiscountsData = res.discounts;
  const resu = usePreview(null, queryServicesTab);
  const serviceTabData = resu.servicesTab;
  const resul = usePreview(null, queryTeam);
  const teamData = resul.team;
  const result = usePreview(null, queryTestimonials);
  const testimonialsData = result.testimonials;

  return (
    <>
      <LandingPanel data={homeData} discountData={DiscountsData} />
      <div className="content relative">
        <div className="container mx-auto">
          <SectionTitle
            title={homeData.serviceSectionTitle}
            subtitle={homeData.serviceSectionSubtitle}
          />
          <ServicesTab data={serviceTabData} />
        </div>
        <div className="relative container mx-auto">
          <SectionTitle
            title={homeData.teamSectionTitle}
            subtitle={homeData.teamSectionSubtitle}
          />
          <Team data={teamData} />
        </div>
        <div className="relative w-full">
          <SectionTitle
            title={homeData.testimonialSectionTitle}
            subtitle={homeData.testimonialSectionSubtitle}
          />
          <Testimonials data={testimonialsData} />
        </div>
        <div className="relative">
          <SectionTitle
            title={homeData.contactSectionTitle}
            subtitle={homeData.contactSectionSubtitle}
          />
          <Contact data={homeData} />
        </div>
      </div>
      <ScrollButton />
    </>
  );
}
