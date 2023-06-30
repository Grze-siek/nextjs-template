import { Home as HomeType } from '../../typings';
import { Discount as DiscountType } from '../../typings';
import { ServiceTab as ServiceTabType } from '../../typings';
import { Employee as EmployeeType } from '../../typings';
import { Testimonial as TestimonialType } from '../../typings';
import ScrollButton from '../../components/assets/ScrollButton';
import ServicesTab from '../../components/Services';
import Team from '../../components/team/Team';
import Contact from '../../components/Contact/Cantact';
import Testimonials from '../../components/Testimonial/TestimonialCarousel';
import LandingPanel from '../../components/LandingPanel';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.cli';
import PreviewSuspense from '../../components/Preview/PreviewSuspense';
import PreviewHomePage from '../../components/Preview/PreviewHomePage';
import SectionTitle from '../../components/SectionTitle';

export const metadata = {
  title: 'Odnowa | Studio urody i masazu',
};

const queryHome = groq`
*[_type == 'home'][0] {
  ...,
}
`;
const queryDiscounts = groq`
*[_type == 'home'][0] {
  discounts[] -> {_id,duration,title,image,path},
}
`;
const queryServicesTab = groq`
*[_type == 'home'][0] {
  servicesTab[] -> {_id,title,value,link,description,image},
}
`;
const queryTeam = groq`
*[_type == 'home'][0] {
  team[] -> {_id,position,image,name,description},
}
`;
const queryTestimonials = groq`
*[_type == 'home'][0] {
  testimonials[] -> {_id,userName,value,date,fromWhere,description,image}
}
`;

async function Home() {
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
        <PreviewHomePage
          queryHome={queryHome}
          queryDiscounts={queryDiscounts}
          queryServicesTab={queryServicesTab}
          queryTeam={queryTeam}
          queryTestimonials={queryTestimonials}
        />
      </PreviewSuspense>
    );
  }

  const homeData: HomeType = await client.fetch(queryHome);
  const res = await client.fetch(queryDiscounts);
  const DiscountsData: DiscountType[] = res.discounts;
  const resu = await client.fetch(queryServicesTab);
  const serviceTabData: ServiceTabType = resu.servicesTab;
  const resul = await client.fetch(queryTeam);
  const teamData: EmployeeType[] = resul.team;
  const result = await client.fetch(queryTestimonials);
  const testimonialsData: TestimonialType[] = result.testimonials;
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
        <div className="relative mx-auto container">
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

export default Home;
