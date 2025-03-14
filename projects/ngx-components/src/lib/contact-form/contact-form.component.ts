import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ContactFormData } from 'js-interface';
import { TextInputComponent } from '../inputs/text-input.component';
import { TextAreaComponent } from '../inputs/text-area.component';

@Component({
  selector: 'gilles-nx-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    TextInputComponent,
    TextAreaComponent,
  ],
  templateUrl: './contact-form.component.html',
  styles: `
    :host {
      display: block;
    }

    label {
      display: block;
    }

    input,
    textarea {
      border: 1px solid darkblue;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class ContactFormComponent implements OnInit {
  @Input() labelInside = false;
  @Input() googleCaptchaV2SiteKey: string | undefined | null;
  @Input() submissionSuccessfullyCompleted = false;

  errorReceived = input<boolean>(false);
  resetSubmitted = computed(() => {
    if (this.errorReceived()) {
      this.enableSubmitButton();
    }
  });

  @Output() contactFormValidSubmitted = new EventEmitter<ContactFormData>();
  @Output() contactFormErrorEmitted = new EventEmitter<string>();

  formGroup!: FormGroup;
  submitted = signal<boolean>(false);
  loading = signal<boolean>(false);

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.submissionSuccessfullyCompleted = false;

    const group: { [key: string]: FormControl } = {
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.pattern('^(\\d[ .]?){10}$')]),
      // company: new FormControl('', []),
      // address: new FormControl('', []),
      // zipcode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}$')]),
      city: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    };
    if (this.googleCaptchaV2SiteKey) {
      console.log('googleCaptchaV2SiteKey');
      group['recaptchaReactive'] = new FormControl(null, Validators.required);
    }
    this.formGroup = this.builder.group(group);
  }

  onSubmit() {
    this.loading.set(true);

    if (this.formGroup.valid) {
      const emitValue: ContactFormData = this.formGroup.value;
      this.contactFormValidSubmitted.emit(emitValue);

      this.loading.set(false);
      this.submitted.set(true);
      //this.resetForm();
    } else {
      this.contactFormErrorEmitted.emit('Formulaire incomplet, veuillez vérifier vos informations.');
    }
  }

  resetForm(): void {
    this.submitted.set(false);
    this.loading.set(false);
    this.formGroup.reset();
  }

  // Add '(resolved)="resolved($event)"' to the re-captcha component
  // to listen captcha response
  // resolved(captchaResponse: string | null) {
  //   // console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }

  enableSubmitButton() {
    this.loading.set(false);
    this.submitted.set(false);
  }

  disableSubmitButton() {
    this.loading.set(true);
    this.submitted.set(true);
    // return !this.formGroup.valid || this.loading || this.submitted;
  }

  isDisabled() {
    return !this.formGroup.valid || this.loading() || this.submitted();
  }
}
