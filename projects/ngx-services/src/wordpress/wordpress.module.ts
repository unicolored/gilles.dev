import { NgModule } from '@angular/core';
import { HttpService } from '../service/http.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { WordpressService } from './wordpress.service';

@NgModule({
  imports: [],
  providers: [
    WordpressService,
    {
      provide: HttpService,
      useClass: HttpService,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class WordpressModule {}
