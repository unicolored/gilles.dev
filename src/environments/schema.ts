import { ContactPoint, Corporation, Offer, Place, PostalAddress, Service, WebSite } from 'schema-dts';

const GillesDevAreasServed: Place[] = [
  {
    '@type': 'AdministrativeArea',
    name: 'Troyes',
    address: {
      '@type': 'PostalAddress',
      postalCode: '10000',
      addressCountry: 'France',
    },
  },
  {
    '@type': 'AdministrativeArea',
    name: 'Sens',
    address: {
      '@type': 'PostalAddress',
      postalCode: '89108',
      addressCountry: 'France',
    },
  },
  {
    '@type': 'AdministrativeArea',
    name: 'Auxerre',
    address: {
      '@type': 'PostalAddress',
      postalCode: '89000',
      addressCountry: 'France',
    },
  },
  {
    '@type': 'AdministrativeArea',
    name: 'Romilly-sur-Seine',
    address: {
      '@type': 'PostalAddress',
      postalCode: '10100',
      addressCountry: 'France',
    },
  },
];

const GillesDevAddress: PostalAddress = {
  '@type': 'PostalAddress',
  telephone: '06 63 07 83 96',
  contactType: 'customer service',
  email: 'gilles@gilles.dev',
  areaServed: GillesDevAreasServed,
  availableLanguage: ['fr', 'en'],
};

const GillesDevContactPoint: ContactPoint = {
  '@type': 'ContactPoint',
  telephone: GillesDevAddress.telephone,
  contactType: 'customer service',
  email: GillesDevAddress.email,
  areaServed: GillesDevAreasServed,
  availableLanguage: ['fr', 'en'],
};

const GillesDevOffers: Offer[] = [
  {
    '@type': 'Offer',
    name: 'Développement Web & App',
  },
  {
    '@type': 'Offer',
    name: 'Conseil / Consulting',
  },
  {
    '@type': 'Offer',
    name: 'Webdesign',
  },
  {
    '@type': 'Offer',
    name: 'Graphisme PAO',
  },
  {
    '@type': 'Offer',
    name: 'Identité visuelle',
  },
  {
    '@type': 'Offer',
    name: 'Création de logo',
  },
];
export const GillesDevCorporation: Corporation = {
  '@type': 'Corporation',
  name: 'Gilles.dev Hoarau',
  url: 'https://www.gilles.dev',
  // logo: '',
  alternateName: 'Creator of web apps, imagery, and 3D experiences',
  sameAs: [
    'https://maps.app.goo.gl/KgkSZ1DNShX8Bhjy8',
    'https://github.com/unicolored',
    'https://www.linkedin.com/in/gilleshoarau/',
  ],
  contactPoint: [GillesDevContactPoint],
  address: GillesDevAddress,
  areaServed: GillesDevAreasServed,
};

export const GillesDevWebSite: WebSite = {
  '@type': 'WebSite',
  name: 'Gilles.dev Hoarau',
  url: 'https://www.gilles.dev',
};

export const GillesDevServiceConseil: Service = {
  '@type': 'Service',
  name: 'Conseil / Consulting',
  // image: '',
  // description: '',
  brand: 'Gilles.dev Hoarau',
  offers: GillesDevOffers,
  isRelatedTo: [],
  provider: GillesDevCorporation,
};

export const GillesDevServiceGraphicDesign: Service = {
  '@type': 'Service',
  name: 'Développment de sites web',
  // image: '',
  // description: '',
  brand: 'Gilles.dev Hoarau',
  offers: GillesDevOffers,
  isRelatedTo: [GillesDevServiceConseil],
  provider: GillesDevCorporation,
};

export const GillesDevServiceDevelopment: Service = {
  '@type': 'Service',
  name: 'Graphic Design',
  // image: '',
  // description: '',
  brand: 'Gilles.dev Hoarau',
  offers: GillesDevOffers,
  isRelatedTo: [GillesDevServiceConseil, GillesDevServiceGraphicDesign],
  provider: GillesDevCorporation,
};
