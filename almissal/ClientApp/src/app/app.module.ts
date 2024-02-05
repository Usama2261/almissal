import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrandSayaComponent } from './home/brand-saya/brand-saya.component';
import { NavMenuComponent } from './landing-page/nav-menu/nav-menu.component';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './landing-page/footer/footer.component';
import { ClientServicesComponent } from './landing-page/client-services/client-services.component';
import { BaseComponent } from './base/base/base.component';

@NgModule({
  declarations: [
    //BaseComponent,
    AppComponent,
    HomeComponent,
    BrandSayaComponent,
    NavMenuComponent,
    FooterComponent,
    ClientServicesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LandingPageModule,
    SharedModule
    // NgbCarouselModule
  ],
  exports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
