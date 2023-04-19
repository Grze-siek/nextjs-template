import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Employee Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Employee Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Employee Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
