import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'massage',
  title: 'Strona masażu',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł strony',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Podtytuł strony',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Główne zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Tytuł sekcji np. Nasze usługi kosmetyczne',
      type: 'string',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Podtytuł sekcji',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Lista usług',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'service' } }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
