import { FirebaseConfig } from './firebase.interface';
import { WebPageMetas } from './web-page.interface';
import { NavbarData } from './navbar.interface';

export interface NestAppEnvPublic {
  swagger: {
    title: string;
    description: string;
  };
}

export interface FirebaseAppEnvPublic {
  firebaseConfig: FirebaseConfig;
}

export enum AppEnvEnum {
  local = 'local',
  staging = 'staging',
  production = 'production',
}

export interface AppFeature {
  name: string;
  active: boolean;
}

export type AppEnvPublic = FirebaseAppEnvPublic &
  Partial<{
    app_env: AppEnvEnum;
    features: AppFeature[];
    checkEnvironmentVariables: string[];
    useLocalCerts: boolean;
    defaultLocalPort: number;
    cors_origin: unknown | undefined;

    maintenance: boolean;
    isHttpsCallableFromURL: boolean;
    contactFormSubmitURL: string | null;
    googleCaptchaSiteKey: string;
    gcpSharedID: string;
    indexPrayers: string;
    wrkngEndpoint: string;
    meilisearchEndpoint: string;
    myAdminEndpoint: string;
    navbarDataMain: NavbarData;
    navbarDataMobile: NavbarData;
    webPageMetasMap: Map<string, WebPageMetas>;

    strapiEndpoint: string; // @deprecated: TODO: use endpoints instead

    endpoints: { [key in string]: string };

    WORDPRESS_ENDPOINT_PROD: string; // @deprecated: TODO: use endpoints instead
    WORDPRESS_ENDPOINT: string; // @deprecated: TODO: use endpoints instead
  }>;
