import { WebPageMetas } from 'ngx-services';
import { PageIdSlugEnum } from '../app/app.global';
import { GillesDevMetas } from './metas';

export const environment = {
  maintenance: false,
  endpoints: {
    _self: 'https://www.gilles.dev/',
  },
  unicoloredBaseUrl: 'https://unicolo.red',
  algolia: {
    appId: 'SUXVC6B2YE',
    apiKey: 'c6b499da6c9903652a2b4cc7a281d7b9',
  },
  webPageMetasMap: new Map<PageIdSlugEnum, WebPageMetas>()
    .set(PageIdSlugEnum.home, GillesDevMetas[PageIdSlugEnum.home])
    .set(PageIdSlugEnum.about, GillesDevMetas[PageIdSlugEnum.about])
    .set(PageIdSlugEnum.contact, GillesDevMetas[PageIdSlugEnum.contact]),
};
