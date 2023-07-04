interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _key: string;
  _type: Image;
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Home {
  _type: 'home';
  landingTitle: string;
  landingSubtitle?: string;
  landingImage: Image;
  discounts: Discount[];
  serviceSectionTitle: string;
  serviceSectionSubtitle?: string;
  servicesTab: ServiceTab[];
  teamSectionTitle: string;
  teamSectionSubtitle?: string;
  team: Employee[];
  testimonialSectionTitle: string;
  testimonialSectionSubtitle?: string;
  testimonials: Testimonial[];
  contactSectionTitle: string;
  contactSectionSubtitle?: string;
  address: string;
  openingHours: string;
  openingHoursSathurday: string;
  phoneNumber: string;
}
