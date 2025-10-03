import { provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { ApiService } from './services/api.service';
import { HttpService } from 'ngx-services';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes)), HttpService, ApiService],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
