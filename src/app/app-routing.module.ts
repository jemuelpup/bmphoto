import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisitorProfileComponent } from './components/visitor-profile/visitor-profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'visitorprofile', component: VisitorProfileComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{ useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const RoutingComponents = [
	HomeComponent,
	VisitorProfileComponent,
	RegistrationComponent,
	LoginComponent
];