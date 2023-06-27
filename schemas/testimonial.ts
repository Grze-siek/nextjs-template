import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Opinie klientów',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'Nazwa klienta',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Ocena od 1-5',
      type: 'number',
    }),
    defineField({
      name: 'date',
      title: 'Data wystawienia oceny',
      type: 'date',
    }),
    defineField({
      name: 'fromWhere',
      title: 'Skąd pochodzi feedback np. Opinia z Facebooka',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opinia',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie facebooka/google/booksy',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'userName',
      media: 'image',
    },
  },
});
