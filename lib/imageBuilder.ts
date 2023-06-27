import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.cli';

export const urlFor = (source: any) => {
  return imageUrlBuilder(client).image(source);
};
