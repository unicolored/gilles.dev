import { WebPageMetas } from '@gilles.nx/shared-js-interface';
import { PageIdSlugEnum } from '../app/app.global';
import { GillesDevMetas } from './metas';

export const environment = {
  maintenance: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAWNZHy_yc59J5DJj5ksaS_1246vwwuSgM',
    authDomain: 'gilles-dev.firebaseapp.com',
    databaseURL: 'https://gilles-dev.firebaseio.com',
    projectId: 'gilles-dev',
    storageBucket: 'gilles-dev.appspot.com',
    messagingSenderId: '841206573778',
    appId: '1:841206573778:web:c7e6d798eb608974275b0b',
  },
  endpoints: {
    _self: 'https://www.gilles.dev/',
  },
  webPageMetasMap: new Map<PageIdSlugEnum, WebPageMetas>()
    .set(PageIdSlugEnum.home, GillesDevMetas[PageIdSlugEnum.home])
    .set(PageIdSlugEnum.about, GillesDevMetas[PageIdSlugEnum.about])
    .set(PageIdSlugEnum.contact, GillesDevMetas[PageIdSlugEnum.contact]),
};
