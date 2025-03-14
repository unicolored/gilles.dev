import { GillesDevCorporation, GillesDevWebSite } from './schema';
import { WebPageMetas } from 'js-interface';
import { PageIdSlugEnum } from '../app/app.global';

export const GillesDevMetas: { [k: string]: WebPageMetas } = {
  [PageIdSlugEnum.home]: {
    isHome: true,
    title: $localize`Freelance | Graphic Designer & Developer`,
    description: $localize`Meet Gilles, a maker of web apps, imagery, and 3D experiences. Discover his developer toolkit, creative media design skills, and more.`,
    canonical: `/`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [GillesDevCorporation, GillesDevWebSite],
    },
  },
  [PageIdSlugEnum.about]: {
    isHome: false,
    title: $localize`About Gilles Hoarau ∼ Developer`,
    description: $localize`Learn more about Gilles Hoarau, a self-taught web developer and designer with over 15 years of experience. Discover his journey from writing a book on photo manipulation to developing AI-driven web apps, his work in diverse development and graphic design projects, and his hobbies.`,
    canonical: `/${PageIdSlugEnum.contact}`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [GillesDevCorporation, GillesDevWebSite],
    },
  },
  [PageIdSlugEnum.contact]: {
    isHome: false,
    title: $localize`Contact Gilles Hoarau ∼ Developer`,
    description: $localize`Get in touch with Gilles Hoarau, a seasoned web developer and designer. Call directly, send an email, or book a call to discuss creative ventures or everyday challenges. Gilles is ready to help with your project needs.`,
    canonical: `/${PageIdSlugEnum.contact}`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [GillesDevCorporation, GillesDevWebSite],
    },
  },
};
