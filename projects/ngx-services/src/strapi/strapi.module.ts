import { NgModule } from '@angular/core';
import { HttpService } from '../service/http.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { StrapiService } from './strapi.service';
import { MeiliSearchService } from './meilisearch.service';

@NgModule({
  imports: [],
  providers: [
    StrapiService,
    MeiliSearchService,
    {
      provide: HttpService,
      useClass: HttpService,
      // useClass: AxiosService,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class StrapiModule {}
