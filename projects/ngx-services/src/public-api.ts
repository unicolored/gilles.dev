import { InjectionToken } from '@angular/core';

export const WRKNG_API_ENDPOINT = new InjectionToken<string>('');
export const MEILISEARCH_ENDPOINT = new InjectionToken<string>('');
export const MYADMIN_API_ENDPOINT = new InjectionToken<string>('');

export * from './angular/Pipe/CustomSanitizerPipe';

export * from './google/calendar.service';
export * from './google/firebase.service';

export * from './cloudinary/cloudinary.service';

export * from './myAdmin/myadmin.service';
export * from './myAdmin/myadmin.interface';
//
export * from './strapi/meilisearch.service';
export * from './strapi/strapi.service';
export * from './strapi/strapi.module';
//
export * from './wordpress/wordpress.service';
export * from './wordpress/wordpress.module';
//
// // export * from './gcp-secret-manager/secret-manager.service'; // deprecated: do not use from Angular
//
export * from './webPage/web-page.base.component';
export * from './webPage/web-page.service';
//
export * from './service/http.service';
