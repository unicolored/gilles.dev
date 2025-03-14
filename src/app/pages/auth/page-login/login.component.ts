import { Component, OnInit } from '@angular/core';
import { PageModel } from '../../page.model';
import { PageInterface } from '../../page.interface';
import { PagesService } from '../../pages.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['../../pages.common.scss'],
})
export class LoginComponent extends PageModel implements PageInterface, OnInit {
  pageId = 'login';
  loginForm!: FormGroup;
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
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    const { email, password } = this.loginForm.value;
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response.user?.isAnonymous);
        // Handle successful login
        this.router.navigate(['/auth/profile']);
      })
      .catch((error: Error) => {
        // Handle login error
        this.errorMessage = error.message;
      });
  }

  signInWithGoogle() {
    this.auth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((response) => {
        console.log(response.user?.isAnonymous);
        // User signed in using Google
      })
      .catch((error) => {
        // Handle authentication error
        this.errorMessage = error.message;
      });
  }
}
