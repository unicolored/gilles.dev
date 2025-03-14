import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/page-register/register.component';
import { LoginComponent } from './auth/page-login/login.component';
import { ProfileComponent } from './auth/page-profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoggedInGuard } from './auth/loggedIn.guard';
import { FaIconComponent, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightFromSquare as fasArrowUpRightFromSquare,
  faCalendar as fasCalendar,
  faEnvelope as fasEnvelope,
  faMobileScreenButton as fasMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import { SharedNgComponentsModule } from './shared-ng-components.module';

AngularFireModule.initializeApp(environment.firebaseConfig);

export const routes: Route[] = [
  { path: 'register', pathMatch: 'full', component: RegisterComponent, canActivate: [LoggedInGuard] },
  { path: 'login', pathMatch: 'full', component: LoginComponent, canActivate: [LoggedInGuard] },
  { path: 'logout', pathMatch: 'full', component: LoginComponent },
  { path: 'profile', pathMatch: 'full', component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedNgComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    FaIconComponent,
  ],
  providers: [AuthGuard, LoggedInGuard, AuthService],
  declarations: [RegisterComponent, LoginComponent, ProfileComponent],
  exports: [RegisterComponent, LoginComponent, ProfileComponent],
})
export class PagesAuthModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasCalendar, fasMobileScreenButton, fasArrowUpRightFromSquare, fasEnvelope);
  }
}
