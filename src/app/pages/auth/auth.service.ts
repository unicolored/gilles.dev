import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat';
import AuthProvider = firebase.auth.AuthProvider;
import UserCredential = firebase.auth.UserCredential;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: unknown;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    // Setting logged in user in localstorage else null
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') ?? '');
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user') ?? '');
      }
    });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') ?? '');
    if (user == '') {
      return false;
    } else {
      return true;
    }
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: UserCredential) => {
        console.log(result.user?.isAnonymous);
        this.ngZone.run(() => {
          this.router.navigate(['user-profile']);
        });
      })
      .catch((error: unknown) => {
        window.alert(error);
      });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
