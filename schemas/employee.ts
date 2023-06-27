import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'employee',
  title: 'Pracownik',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Imię pracownika',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Funkcja pracownika np. fryzjer',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis pracownika',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie pracownika',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});
