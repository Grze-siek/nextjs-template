import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'home',
  title: 'Strona główna',
  type: 'document',
  fields: [
    defineField({
      name: 'landingTitle',
      title: 'Główny tytuł strony',
      type: 'string',
    }),
    defineField({
      name: 'landingSubtitle',
      title: 'Podtytuł',
      type: 'string',
    }),
    defineField({
      name: 'landingImage',
      title: 'Landing Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'discounts',
      title: 'Lista promocji',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'discount' } }],
    }),
    defineField({
      name: 'serviceSectionTitle',
      title: 'Tutuł sekcji usług np. Nasze usługi',
      type: 'string',
    }),
    defineField({
      name: 'serviceSectionSubtitle',
      title: 'Podtytuł sekcji usług np. Wybierz spośród wielu usług',
      type: 'string',
    }),
    defineField({
      name: 'servicesTab',
      title: 'Lista kategorii usług',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'serviceTab' } }],
    }),
    defineField({
      name: 'teamSectionTitle',
      title: 'Tutuł sekcji pracowników np. Poznaj nasz zespół',
      type: 'string',
    }),
    defineField({
      name: 'teamSectionSubtitle',
      title:
        'Podtytuł sekcji pracowników np. Jesteśmy super wykwalifikowani i najlepsi',
      type: 'string',
    }),
    defineField({
      name: 'team',
      title: 'Lista członków zespołu',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'employee' } }],
    }),
    defineField({
      name: 'testimonialSectionTitle',
      title: 'Tutuł sekcji opinie klientów np. Co sądzą o nas nasi klienci',
      type: 'string',
    }),
    defineField({
      name: 'testimonialSectionSubtitle',
      title:
        'Podtytuł sekcji opinie klientów np. Odwiedź nas i przekonaj się sam',
      type: 'string',
    }),
    defineField({
      name: 'testimonials',
      title: 'Opinie klientów do wyświetlenia na stronie głownej',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'testimonial' } }],
    }),
    defineField({
      name: 'contactSectionTitle',
      title: 'Tutuł sekcji Skontaktuj się',
      type: 'string',
    }),
    defineField({
      name: 'contactSectionSubtitle',
      title: 'Podtytuł sekcji Skontaktuj się',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Adres firmy',
      type: 'string',
    }),
    defineField({
      name: 'openingHours',
      title: 'Godziny otwarcia w tygodniu',
      type: 'string',
    }),
    defineField({
      name: 'openingHoursSathurday',
      title: 'Godziny otwarcia w sobotę',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Numer telefonu',
      type: 'string',
    }),
  ],
});
