import { Inject, Injectable, InjectionToken } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable, HttpsCallable } from 'firebase/functions';
import { httpsCallableFromURL } from '@firebase/functions';
import { ContactFormData, FirebaseConfig } from 'js-interface';
import { MessageSendingResponse } from 'postmark/dist/client/models';

// export const FIREBASE_SERVICE = new InjectionToken<string>('');
export const FIREBASE_SERVICE_PARAMS = new InjectionToken<string>('');

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private sendmail: HttpsCallable<ContactFormData>;

  constructor(
    @Inject(FIREBASE_SERVICE_PARAMS)
    private readonly params: {
      firebaseConfig: FirebaseConfig;
      isHttpsCallableFromURL?: boolean;
      contactFormSubmitURL?: string | null;
    },
  ) {
    const app = initializeApp({
      projectId: this.params.firebaseConfig?.projectId,
      apiKey: this.params.firebaseConfig?.apiKey,
      authDomain: this.params.firebaseConfig?.authDomain,
    });
    const region = 'europe-west1';
    const functions = getFunctions(app, region);

    this.sendmail =
      params.isHttpsCallableFromURL && this.params.contactFormSubmitURL
        ? httpsCallableFromURL(functions, this.params.contactFormSubmitURL)
        : httpsCallable(functions, 'sendmail');
  }

  sendContactFormData(data: ContactFormData) {
    try {
      return this.sendmail(data)
        .then((result) => {
          // Read result of the Cloud Function.
          return result.data as Pick<MessageSendingResponse, 'ErrorCode' | 'Message'>;
        })
        .catch((error) => {
          // Getting the Error details.
          const code = error.code;
          const message = error.message;
          const details = error.details;
          console.error(code, message, details);
          // ...
          return {
            ErrorCode: code,
            Message: message,
          };
        });
    } catch (error: unknown) {
      console.error(error);
    }

    return {
      ErrorCode: 1,
      Message: 'KO',
    };
  }
}
