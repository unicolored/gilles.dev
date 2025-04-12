import { PageIdSlugEnum } from '../app/app.global';
import { GillesDevMetas } from './metas';
import { WebPageMetas } from 'ngx-services';

export const environment = {
  maintenance: false,
  endpoints: {
    _self: 'http://localhost:4242',
  },
  unicoloredBaseUrl: 'http://localhost:4125',
  algolia: {
    appId: 'SUXVC6B2YE',
    apiKey: 'c6b499da6c9903652a2b4cc7a281d7b9',
  },
  webPageMetasMap: new Map<PageIdSlugEnum, WebPageMetas>()
    .set(PageIdSlugEnum.home, GillesDevMetas[PageIdSlugEnum.home])
    .set(PageIdSlugEnum.about, GillesDevMetas[PageIdSlugEnum.about])
    .set(PageIdSlugEnum.contact, GillesDevMetas[PageIdSlugEnum.contact]),
};
