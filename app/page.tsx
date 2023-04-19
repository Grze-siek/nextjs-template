import About from '../components/about/About';
import Gallery from '../components/Gallery';
import Landing from '../components/Landing';
import Products from '../components/Products';
import { HomePage } from '../typings';
import { fetchHome } from '../utils/fetchHome';

export const metadata = {
  title: 'Miso - Beauty Salon',
};

async function Home() {
  const homeData: Promise<HomePage> = fetchHome();
  const data = await homeData;
  return (
    <>
      <main
        data-default-focus
        className={`snap-mandatory snap-y overflow-y-scroll overflow-x-hidden z-0 scrollbar-thumb-darkred-color scrollbar-thumb-rounded`}
      >
        <section id="landing" className="snap-start">
          <Landing landingData={data} />
        </section>

        <section id="about" className="snap-center">
          <About aboutData={data} />
        </section>

        <section id="product" className="snap-center">
          <Products productsData={data} />
        </section>

        <section id="gallery" className="snap-center">
          <Gallery galleryData={data} />
        </section>
      </main>
    </>
  );
}

export default Home;
