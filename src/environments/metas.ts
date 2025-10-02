import { GillesDevCorporation, GillesDevWebSite } from './schema';
import { PageIdSlugEnum } from '../app/app.global';
import { WebPageMetas } from 'ngx-services';

export const GillesDevMetas: { [k: string]: WebPageMetas } = {
  [PageIdSlugEnum.home]: {
    isHome: true,
    title: `Freelance | Graphic Designer & Developer`,
    description: `Meet Gilles, a maker of web apps, imagery, and 3D experiences. Discover his developer toolkit, creative media design skills, and more.`,
    canonical: `/`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [GillesDevCorporation, GillesDevWebSite],
    },
  },
  [PageIdSlugEnum.about]: {
    isHome: false,
    title: `About Gilles Hoarau ∼ Developer`,
    description: `Learn more about Gilles Hoarau, a self-taught web developer and designer with over 15 years of experience. Discover his journey from writing a book on photo manipulation to developing AI-driven web apps, his work in diverse development and graphic design projects, and his hobbies.`,
    canonical: `/${PageIdSlugEnum.contact}`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [GillesDevCorporation, GillesDevWebSite],
    },
  },
  [PageIdSlugEnum.contact]: {
    isHome: false,
    title: `Contact Gilles Hoarau ∼ Developer`,
    description: `Get in touch with Gilles Hoarau, a seasoned web developer and designer. Call directly, send an email, or book a call to discuss creative ventures or everyday challenges. Gilles is ready to help with your project needs.`,
    canonical: `/${PageIdSlugEnum.contact}`,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [GillesDevCorporation, GillesDevWebSite],
    },
  },
};

export const webPageMetasMap = new Map<PageIdSlugEnum, WebPageMetas>()
  .set(PageIdSlugEnum.home, GillesDevMetas[PageIdSlugEnum.home])
  .set(PageIdSlugEnum.about, GillesDevMetas[PageIdSlugEnum.about])
  .set(PageIdSlugEnum.contact, GillesDevMetas[PageIdSlugEnum.contact]);
