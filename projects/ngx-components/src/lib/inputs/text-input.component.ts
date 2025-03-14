import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'gilles-nx-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <ng-container *ngIf="name" [formGroup]="formGroup">
      <div class="input-wrapper">
        <ng-container *ngIf="label && labelInside; else labelOutside">
          <label
            class="input input-bordered flex items-center gap-2"
            [class.text-warning]="hasError()"
            [class.input-warning]="hasError()"
          >
            {{ label }}
            <input
              [type]="type"
              [name]="name"
              [value]="value"
              [formControlName]="name"
              class="grow border-0 text-black"
              [placeholder]="placeholder"
            />
          </label>
          <!--<ng-container *ngIf="hasError()">
            <span class="label-text-alt text-danger">* Champ requis</span>
          </ng-container>-->
        </ng-container>

        <ng-template #labelOutside>
          <label class="form-control w-full">
            <div class="label">
              <span class="label-text" [innerText]="label"></span>
              <!--<ng-container *ngIf="hasError()">
              <span class="label-text-alt text-danger">*</span>
              </ng-container>-->
            </div>
            <input
              [type]="type"
              [placeholder]="placeholder"
              [formControlName]="name"
              [name]="name"
              [value]="value"
              class="input input-bordered w-full"
              [class.text-warning]="hasError()"
              [class.input-warning]="hasError()"
            />
            <!--<div class="label">-->
            <!--<span class="label-text-alt">Bottom Left label</span>-->
            <!--<span class="label-text-alt">Bottom Right label</span>-->
            <!--</div>-->
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
export class TextInputComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() labelInside = false;

  @Input() label!: string;
  @Input() name!: string;
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value: string | null = null;

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
