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
import { GlobalsService } from './services/globals.service';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCamera, faImages,faPaintBrush,faCaretDown,
faStar,faHeart as faSHeart, faSearch, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { VisitorProfileComponent } from './components/visitor-profile/visitor-profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { PriceformatPipe } from './pipes/priceformat.pipe';
import { LoginComponent } from './components/login/login.component';
import { SearchPhotographerComponent } from './components/search-photographer/search-photographer.component';
import { PhotographerCardComponent } from './components/photographer-card/photographer-card.component';
import { PackagePriceCardComponent } from './components/package-price-card/package-price-card.component';


library.add(
  faHeart,faSHeart,faBars, faCamera, faImages, faPencilAlt,
  faPaintBrush,faCaretDown,faStar, faEnvelope, faBell,faSearch);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    VisitorProfileComponent,
    RegistrationComponent,
    PackageCardComponent,
    PriceformatPipe,
    LoginComponent,
    SearchPhotographerComponent,
    PhotographerCardComponent,
    PackagePriceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
