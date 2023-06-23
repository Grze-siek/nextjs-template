import { HomePage } from '../typings';
import { fetchHome } from '../utils/fetchHome';
import ScrollButton from '../components/assets/ScrollButton';
import ServicesTab from '../components/Services';
import Team from '../components/team/Team';
import Contact from '../components/Contact/Cantact';
import Testimonials from '../components/Testimonial/TestimonialCarousel';
import LandingPanel from '../components/LandingPanel';

export const metadata = {
  title: 'Odnowa | Studio urody i masazu',
};

async function Home() {
  // const homeData: Promise<HomePage> = fetchHome();
  // const data = await homeData;

  return (
    <>
      <LandingPanel />
      <div className="content relative">
        <div className="relative">
          <ServicesTab />
        </div>
        <div className="relative">
          <Team />
        </div>
        <div className="relative w-full">
          <Testimonials />
        </div>
        <div className="relative">
          <Contact />
        </div>
      </div>
      <ScrollButton />
    </>
  );
}

export default Home;
