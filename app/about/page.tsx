import { fetchAbout } from '../../utils/fetchAbout';
import { AboutPage } from '../../typings';
import AboutPageClient from '../../components/AboutPageClient';

type Props = {};

export const metadata = {
  title: 'Miso | About',
};

async function About({}: Props) {
  const aboutData: Promise<AboutPage> = fetchAbout();
  const data = await aboutData;

  return (
    <section className="bg-light-color">
      <div className="pt-[40px] md:pt-[77px] mx-auto lg:max-w-5xl xl:max-w-6xl border-b border-b-darker-color">
        <AboutPageClient data={data} />
      </div>
    </section>
  );
}

export default About;
