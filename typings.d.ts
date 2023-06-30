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

export interface Discount extends SanityBody {
  _type: 'discount';
  duration: string;
  title: string;
  image: Image;
  path: string;
}

export interface ServiceTab extends SanityBody {
  _type: 'serviceTab';
  title: string;
  value: Slug;
  image: Image;
  description: string;
  link: string;
}

export interface Slug {
  _type: 'slug';
  current: string;
}

export interface Employee extends SanityBody {
  _type: 'employee';
  name: string;
  position: string;
  description: string;
  image: Image;
}

export interface Testimonial extends SanityBody {
  _type: 'testimonial';
  userName: string;
  value: number;
  date: string;
  fromWhere: string;
  description: string;
  image: Image;
}

export interface Services {
  title: string;
  subtitle: string;
  image: Image;
  sectionTitle: string;
  sectionSubtitle: string;
  services: Service[];
}

export interface Service {
  _id: string;
  title: string;
  price: string;
  isDiscount: boolean;
  priceAfterDiscount?: string;
  durationOfService: string;
  description: string;
  image: Image[];
  isPakiet: boolean;
}
