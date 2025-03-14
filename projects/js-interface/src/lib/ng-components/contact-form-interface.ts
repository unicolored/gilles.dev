export enum SendMailAuthorizedId {
  reginaCaeli = 'reginaCaeli',
  mdivConsulting = 'mdivConsulting',
}

export function isValidSendMailAuthorizedId(value: any): value is SendMailAuthorizedId {
  return Object.values(SendMailAuthorizedId).includes(value);
}

export interface ContactFormData {
  _nxProjectId: SendMailAuthorizedId;
  lastname: string;
  firstname: string;
  user_type: string;
  email: string;
  phone?: string | null;
  company: string;
  address: string;
  city: string;
  zipcode: string;
  message: string;
  recaptchaReactive?: string;
  captchaSiteKey?: string | null;
}
