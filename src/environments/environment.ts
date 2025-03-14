import { WebPageMetas } from 'js-interface';
import { PageIdSlugEnum } from '../app/app.global';
import { GillesDevMetas } from './metas';

export const environment = {
  maintenance: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAUKEYWQsTqYFZXPIq6bruTbEv8YK1l4DQ',
    authDomain: 'gilles-dev-staging.firebaseapp.com',
    projectId: 'gilles-dev-staging',
    storageBucket: 'gilles-dev-staging.appspot.com',
    messagingSenderId: '803947731698',
    appId: '1:803947731698:web:8aa9f5c958e3c0f0f24e6b',
  },
  endpoints: {
    _self: 'http://localhost:4242',
  },
  webPageMetasMap: new Map<PageIdSlugEnum, WebPageMetas>()
    .set(PageIdSlugEnum.home, GillesDevMetas[PageIdSlugEnum.home])
    .set(PageIdSlugEnum.about, GillesDevMetas[PageIdSlugEnum.about])
    .set(PageIdSlugEnum.contact, GillesDevMetas[PageIdSlugEnum.contact]),
};
