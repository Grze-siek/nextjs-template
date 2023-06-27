import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceTab',
  title: 'Podsumowanie usług na stronie głównej',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Kategoria usługi np. Zabiegi kosmetyczne',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Opis kategorii',
      type: 'blockContent',
    }),
    defineField({
      name: 'link',
      title: 'Link do strony kategorii',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
