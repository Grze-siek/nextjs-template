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

export interface Product extends SanityBody {
  _key: string;
  name: string;
  image: string;
  description?: string;
  price?: number;
  isAvailable?: boolean;
}

export interface Employee extends SanityBody {
  name: string;
  description: string;
  image: Image;
}

export interface HomePage extends SanityBody {
  landingTitle: string;
  shortLandingDescription: string;
  firstImage: Image;
  secondImage: Image;
  video: string;
  aboutDescription: string;
  aboutImages: Image[];
  productDescription: string;
  products: Product[];
  lastSectionImages: Image[];
  lastSectionDescription: string;
  lastSectionSmallText: string;
}

export interface AboutPage extends SanityBody {
  description: string;
  team: Employee[];
}
