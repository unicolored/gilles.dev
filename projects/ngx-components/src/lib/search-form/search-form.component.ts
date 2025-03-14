import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchFormData } from 'js-interface';
import { TextInputComponent } from '../inputs/text-input.component';

@Component({
  selector: 'gilles-nx-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TextInputComponent],
  template: `
    <div class="search-form-wrapper">
      <form class="search-form" [formGroup]="formGroup" (ngSubmit)="onSubmit()">
        <gilles-nx-text-input
          [label]="label"
          [placeholder]="placeholder"
          type="text"
          name="query"
          [formGroup]="formGroup"
          [labelInside]="labelInside"
          [value]="initialValue"
        ></gilles-nx-text-input>

        <ng-container *ngIf="!hideSubmit">
          <div class="mt-4 pt-2">
            <button type="submit" class="btn btn-primary w-full uppercase" [disabled]="!formGroup.valid || loading">
              Envoyer
            </button>
          </div>
        </ng-container>
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

    input {
      border: 1px solid darkblue;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SearchFormComponent implements OnInit {
  @Input() labelInside = false;
  @Input() hideSubmit = false;
  @Input() resetFormAfterSubmit = true;

  @Input() submissionSuccessfullyCompleted = false;
  @Input() label = 'Search';
  @Input() placeholder = '...';
  @Input() initialValue: string | null = null;

  @Output() formValidSubmitted = new EventEmitter<SearchFormData>();
  @Output() formEmptySubmitted = new EventEmitter<null>();

  formGroup!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit() {
    this.submissionSuccessfullyCompleted = false;

    this.formGroup = this.builder.group({
      query: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.loading = true;

    if (this.formGroup.valid) {
      const emitValue: SearchFormData = this.formGroup.value;
      this.formValidSubmitted.emit(emitValue);

      this.loading = false;
      this.resetForm();
    } else {
      this.formEmptySubmitted.emit(null);
    }
  }

  resetForm(): void {
    this.submitted = false;
    this.loading = false;
    if (this.resetFormAfterSubmit) {
      this.formGroup.reset();
    }
  }

  // Add '(resolved)="resolved($event)"' to the re-captcha component
  // to listen captcha response
  // resolved(captchaResponse: string | null) {
  //   // console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }
}
