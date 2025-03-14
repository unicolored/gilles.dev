import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'gilles-nx-text-area',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ng-container *ngIf="name" [formGroup]="formGroup">
      <div class="input-wrapper mb-2">
        <ng-container *ngIf="label && labelInside; else labelOutside">
          <textarea
            [formControlName]="name"
            [name]="name"
            class="textarea textarea-bordered textarea-md w-full h-32"
            [class.textarea-warning]="hasError()"
            [placeholder]="placeholder"
          ></textarea>
        </ng-container>

        <ng-template #labelOutside>
          <label class="form-control">
            <div class="label">
              <span class="label-text" [innerText]="label"></span>
              <!--<span class="label-text-alt">Alt label</span>-->
            </div>
            <textarea
              [formControlName]="name"
              [placeholder]="placeholder"
              [name]="name"
              [class.textarea-warning]="hasError()"
              class="textarea textarea-bordered textarea-md w-full h-32"
            ></textarea>
            <!--<div class="label">
              <span class="label-text-alt">Your bio</span>
              <span class="label-text-alt">Alt label</span>
            </div>-->
          </label>
        </ng-template>
      </div>
    </ng-container>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TextAreaComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() labelInside = false;

  @Input() label!: string;
  @Input() name!: string;
  @Input() type = 'text';
  @Input() placeholder = '';

  errors!: ValidationErrors;

  ngOnInit(): void {
    this.errors = this.formGroup.controls[this.name].errors as ValidationErrors;
  }

  hasError(): boolean {
    if (this.formGroup.controls[this.name].valid) {
      return false;
    }

    return this.errors && (this.formGroup.controls[this.name].dirty || this.formGroup.controls[this.name].touched);
  }
}
