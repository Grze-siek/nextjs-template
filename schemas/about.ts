import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'team',
      title: 'Our Team',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'employee' } }],
    }),
  ],
});
