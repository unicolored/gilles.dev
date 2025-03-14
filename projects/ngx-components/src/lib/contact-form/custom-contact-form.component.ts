import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ContactFormData } from 'js-interface';
import { TextInputComponent } from '../inputs/text-input.component';
import { TextAreaComponent } from '../inputs/text-area.component';
import { CustomContactFields } from './custom-contact-form.interface';
import { SelectComponent } from '../inputs/select.component';

@Component({
  selector: 'gilles-nx-custom-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    TextInputComponent,
    TextAreaComponent,
    SelectComponent,
  ],
  template: `
    <div class="contact-form-wrapper">
      <form data-cy="contact-form" class="contact-form" [formGroup]="formGroup" (ngSubmit)="onSubmit()">
        @for (field of fields(); track field.name) {
          @if (field.type === 'text' || field.type === 'email') {
            <gilles-nx-text-input
              [type]="field.type"
              [name]="field.name"
              [label]="field.label"
              [placeholder]="field.placeholder ?? ''"
              [formGroup]="formGroup"
              [labelInside]="labelInside"
            ></gilles-nx-text-input>
          } @else if (field.type === 'textarea') {
            <gilles-nx-text-area
              [type]="field.type"
              [name]="field.name"
              [label]="field.label"
              [placeholder]="field.placeholder ?? ''"
              [formGroup]="formGroup"
              [labelInside]="false"
            ></gilles-nx-text-area>
          } @else if (field.type === 'select') {
            <gilles-nx-select
              [type]="field.type"
              [name]="field.name"
              [label]="field.label"
              [options]="field.options ?? []"
              [placeholder]="field.placeholder ?? ''"
              [formGroup]="formGroup"
              [labelInside]="false"
            ></gilles-nx-select>
          }
        }

        <ng-container *ngIf="googleCaptchaV2SiteKey">
          <div class="py-2">
            <re-captcha formControlName="recaptchaReactive" [siteKey]="googleCaptchaV2SiteKey"></re-captcha>
          </div>
        </ng-container>

        <div class="mt-4 pt-2" [attr.data-loading]="loading" [attr.data-invalid]="!formGroup.valid">
          <button
            type="submit"
            data-cy="contact-form-submit-button"
            [class]="buttonClass()"
            [disabled]="!formGroup.valid || loading"
          >
            {{ buttonText() }}
          </button>
        </div>
      </form>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }

    label {
      display: block;
    }

    input,
    textarea {
      border: 1px solid #fff;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomContactFormComponent implements OnInit {
  @Input() labelInside = false;
  @Input() googleCaptchaV2SiteKey: string | undefined | null;
  @Input() submissionSuccessfullyCompleted = false;
  fields = input<CustomContactFields>([]);
  buttonClass = input<string>('btn btn-primary btn-wide uppercase');
  buttonText = input<string>('Envoyer');

  @Output() contactFormValidSubmitted = new EventEmitter<ContactFormData>();
  @Output() contactFormErrorEmitted = new EventEmitter<string>();

  formGroup!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.submissionSuccessfullyCompleted = false;

    const group: { [key: string]: FormControl } = {};
    this.fields().forEach((f) => {
      const validators = [];
      if (f.type === 'email') {
        validators.push(Validators.email);
      }
      if (f.required) {
        validators.push(Validators.required);
      }
      if (f.pattern) {
        validators.push(Validators.pattern(f.pattern));
      }
      group[f.name] = new FormControl('', validators);
    });
    if (this.googleCaptchaV2SiteKey) {
      console.log('googleCaptchaV2SiteKey');
      group['recaptchaReactive'] = new FormControl(null, Validators.required);
    }
    this.formGroup = this.builder.group(group);
  }

  onSubmit() {
    this.loading = true;

    if (this.formGroup.valid) {
      const emitValue: ContactFormData = this.formGroup.value;
      this.contactFormValidSubmitted.emit(emitValue);

      this.loading = false;
      this.resetForm();
    } else {
      this.contactFormErrorEmitted.emit('Formulaire incomplet, veuillez vérifier vos informations.');
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.loading = false;
    this.formGroup.reset();
  }

  // Add '(resolved)="resolved($event)"' to the re-captcha component
  // to listen captcha response
  // resolved(captchaResponse: string | null) {
  //   // console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }
}
