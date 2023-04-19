import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Product price in $',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Product image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isAvailable',
      title: 'Is currently available?',
      type: 'boolean',
    }),
  ],
});
