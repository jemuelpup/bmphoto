import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule,RoutingComponents } from './/app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

// ngx bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCamera, faImages, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


library.add(faHeart,faBars, faCamera, faImages, faPaintBrush);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
