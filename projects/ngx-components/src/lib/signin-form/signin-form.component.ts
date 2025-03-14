import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../inputs/text-input.component';
import { SigninFormData } from 'js-interface';

@Component({
  selector: 'gilles-nx-signin-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TextInputComponent],
  template: `
    <form class="contact-form" [formGroup]="formGroup" (ngSubmit)="onSubmit()">
      <gilles-nx-text-input
        label="Email"
        placeholder="Entrez l'adresse e-mail"
        type="email"
        name="email"
        [formGroup]="formGroup"
        [labelInside]="labelInside"
      ></gilles-nx-text-input>

      <gilles-nx-text-input
        label="Password"
        placeholder="Entrez un mot de passe"
        type="password"
        name="password"
        [formGroup]="formGroup"
        [labelInside]="labelInside"
      ></gilles-nx-text-input>

      <div class="mt-4 pt-2">
        <button type="submit" class="btn btn-primary w-full uppercase" [disabled]="!formGroup.valid || loading">
          Envoyer
        </button>
      </div>
    </form>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SigninFormComponent implements OnInit {
  @Input() labelInside = false;
  @Input() submissionSuccessfullyCompleted = false;

  @Output() formValidSubmitted = new EventEmitter<SigninFormData>();
  @Output() formErrorEmitted = new EventEmitter<string>();

  formGroup!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.submissionSuccessfullyCompleted = false;

    const formSetup: { email: FormControl; password: FormControl } = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    };
    this.formGroup = this.builder.group(formSetup);
  }

  onSubmit() {
    this.loading = true;

    if (this.formGroup.valid) {
      const emitValue: SigninFormData = this.formGroup.value;
      this.formValidSubmitted.emit(emitValue);

      this.loading = false;
      this.resetForm();
    } else {
      this.formErrorEmitted.emit('Formulaire invalide, veuillez vérifier vos informations.');
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.loading = false;
    this.formGroup.reset();
  }
}
