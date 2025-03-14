import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import { Inject, Injectable, InjectionToken } from '@angular/core';

export const GCP_SHARED_ID = new InjectionToken<string>('');
export const FIREBASE_PROJECT_ID = new InjectionToken<string>('');

@Injectable()
export class SecretManagerService {
  private client: SecretManagerServiceClient;

  constructor(
    @Inject(GCP_SHARED_ID) private readonly projectShared: string,
    @Inject(FIREBASE_PROJECT_ID) private readonly project: string,
  ) {
    this.client = new SecretManagerServiceClient();
  }

  /**
   *
   * @param secretNameVersion Could be a "name/version" or a "name"
   * @param shared
   */
  async getSecret(secretNameVersion: string, shared = true): Promise<string | undefined> {
    try {
      const targetProjectID = shared ? this.projectShared : this.project;
      console.log(targetProjectID);

      // const cacheKey = `${targetProjectID}-${secretNameVersion}`;
      // if (C.cacheService.has(cacheKey)) {
      //   return await C.cacheService.get(cacheKey) as string;
      // }

      const reqSecretName = secretNameVersion.split('/')[0];
      const reqSecretVersion = secretNameVersion.split('/')[1] ?? 'latest';

      const secretVersionPath = this.client.secretVersionPath(targetProjectID, reqSecretName, reqSecretVersion);
      const [secretVersion] = await this.client.accessSecretVersion({ name: secretVersionPath });

      const result = secretVersion.payload?.data?.toString();
      // C.cacheService.set(cacheKey, result);

      return result;
    } catch (e: unknown) {
      console.error(e);
      return undefined;
    }
  }
}
