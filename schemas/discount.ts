import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'discount',
  title: 'Promocja',
  type: 'document',
  fields: [
    defineField({
      name: 'duration',
      title: 'Określ czas trwania promocji np. Promocja do końca tygodnia',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Tytuł promocji np. 20% znizki na masaz klasyczny',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Dodaj zdjęcie do promocji',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'path',
      title:
        'Podaj ściezkę do usługi ("/zabiegi_kosmetyczne", "/manicure&pedicure", "/masaz", "/fryzjer")',
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
