import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VisitorProfileComponent } from './components/visitor-profile/visitor-profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { SearchPhotographerComponent } from './components/search-photographer/search-photographer.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'visitorprofile', component: VisitorProfileComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'searchphotographer', component: SearchPhotographerComponent },
	{ path: 'messenger', component: MessengerComponent },
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
	LoginComponent,
	MessengerComponent,
	SearchPhotographerComponent
];