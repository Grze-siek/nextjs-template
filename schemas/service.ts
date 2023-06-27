import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Usługa',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nazwa usługi',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Cena usługi',
      type: 'string',
    }),
    defineField({
      name: 'isDiscount',
      title: 'Czy usługa jest przeceniona?',
      type: 'boolean',
    }),
    defineField({
      name: 'priceAfterDiscount',
      title: 'Cena usługi po przecenie',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Opis usługi',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Zdjęcia usługi',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'isPopular',
      title: 'Czy usługa jest popularna?',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
