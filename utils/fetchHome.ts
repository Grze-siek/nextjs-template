import { HomePage } from '../typings';

export const fetchHome = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getHome`);

  const data = await res.json();
  const home: HomePage = data.home[0];
  return home;
};
