import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule,RoutingComponents } from './/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';
// ngx bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCamera, faImages, faPaintBrush, faCaretDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { VisitorProfileComponent } from './components/visitor-profile/visitor-profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PackageCardComponent } from './components/package-card/package-card.component';


library.add(
  faHeart,faBars, faCamera, faImages,
  faPaintBrush,faCaretDown,faStar);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    VisitorProfileComponent,
    RegistrationComponent,
    PackageCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
