import { HomePage } from '../typings';
import { fetchHome } from '../utils/fetchHome';
import HomeClient from '../components/HomeClient';

export const metadata = {
  title: 'Odnowa | Studio urody i masazu',
};

async function Home() {
  // const homeData: Promise<HomePage> = fetchHome();
  // const data = await homeData;

  return <HomeClient />;
}

export default Home;
