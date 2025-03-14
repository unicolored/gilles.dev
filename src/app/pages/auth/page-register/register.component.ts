import { Component, OnInit } from '@angular/core';
import { PageModel } from '../../page.model';
import { PageInterface } from '../../page.interface';
import { PagesService } from '../../pages.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['../../pages.common.scss'],
})
export class RegisterComponent extends PageModel implements PageInterface, OnInit {
  pageId = 'register';
  registrationForm!: FormGroup;
  errorMessage!: string;

  constructor(
    pagesService: PagesService,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router,
  ) {
    super(pagesService);
    this.setTitle(this.pageId);
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    const { email, password } = this.registrationForm.value;
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // Handle successful registration
        console.log('👍 createUserWithEmailAndPassword response', response);
        this.router.navigate(['/auth/profile']);
      })
      .catch((error) => {
        // Handle registration error
        this.errorMessage = error.message;
      });
  }
}
