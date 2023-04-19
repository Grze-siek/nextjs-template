import { AboutPage } from '../typings';

export const fetchAbout = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`);

  const data = await res.json();
  const about: AboutPage = data.about[0];
  return about;
};
