import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { BtnYellowComponent } from './components/resources/btn-yellow/btn-yellow.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectOptionsComponent } from './components/resources/select-options/select-options.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import {MatSelectModule} from '@angular/material/select';
import { CardComponent } from './components/resources/card/card.component';
import { BtnCartYellowComponent } from './components/resources/btn-cart-yellow/btn-cart-yellow.component';
import { BtnDarkComponent } from './components/resources/btn-dark/btn-dark.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OffersComponent } from './components/offers/offers.component';
import { CardOfferComponent } from './components/resources/card-offer/card-offer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { HttpClientModule } from "@angular/common/http";
import { MessageSystemComponent } from './components/resources/message-system/message-system.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    NavmenuComponent,
    BtnYellowComponent,
    SelectOptionsComponent,
    ReservationComponent,
    CardComponent,
    BtnCartYellowComponent,
    BtnDarkComponent,
    FooterComponent,
    OffersComponent,
    CardOfferComponent,
    NavbarComponent,
    FormUserComponent,
    MessageSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
