import { ContactFormData } from 'js-interface';

export enum FieldType {
  text = 'text',
  email = 'email',
  textarea = 'textarea',
  select = 'select',
}

export interface SelectOption {
  value: string;
  option: string;
}

export interface CustomContactField {
  type: FieldType;
  options?: SelectOption[];
  name: keyof ContactFormData;
  label: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
}

export type CustomContactFields = CustomContactField[];
