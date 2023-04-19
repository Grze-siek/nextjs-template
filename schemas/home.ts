import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Home page',
  type: 'document',
  fields: [
    defineField({
      name: 'landingTitle',
      title: 'Landing page title',
      type: 'string',
    }),
    defineField({
      name: 'shortLandingDescription',
      title: 'Landing page short description',
      type: 'string',
    }),
    defineField({
      name: 'firstImage',
      title: 'First Landing Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondImage',
      title: 'Second Landing Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'video',
      title: 'Landing Page video source',
      type: 'string',
    }),
    defineField({
      name: 'aboutDescription',
      title: '"About us" section description',
      type: 'string',
    }),
    defineField({
      name: 'aboutImages',
      title: '"About us" section images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'productDescription',
      title: '"Products" section description',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'product' } }],
    }),
    defineField({
      name: 'lastSectionImages',
      title: '"Last section" images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'lastSectionDescription',
      title: 'Last section description',
      type: 'string',
    }),
    defineField({
      name: 'lastSectionSmallText',
      title: 'Last section small text',
      type: 'string',
    }),
  ],
});
