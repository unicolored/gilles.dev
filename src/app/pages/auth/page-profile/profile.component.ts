import { Component, OnInit } from '@angular/core';
import { PageModel } from '../../page.model';
import { PageInterface } from '../../page.interface';
import { PagesService } from '../../pages.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import User = firebase.User;
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['../../pages.common.scss'],
})
export class ProfileComponent extends PageModel implements PageInterface, OnInit {
  pageId = 'login';
  isAuthenticated = false;
  user!: User | null;
  newDisplayName!: string;
  errorMessage!: string;

  constructor(
    pagesService: PagesService,
    private auth: AngularFireAuth,
    private router: Router,
  ) {
    super(pagesService);
    this.setTitle(this.pageId);
    console.log('Profile!');
  }

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.isAuthenticated = !!user;
      this.user = user;
    });
  }

  async updateProfile(newName: string) {
    const user = await this.auth.currentUser;
    if (user) {
      user
        .updateProfile({ displayName: newName })
        .then(() => {
          // Update successful
        })
        .catch((error: Error) => {
          // Handle error
          this.errorMessage = error.message;
        });
    }
  }

  logout() {
    this.auth
      .signOut()
      .then(() => {
        this.router.navigate(['/auth/login']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
