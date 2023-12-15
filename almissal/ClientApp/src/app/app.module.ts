import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { BrandSayaComponent } from './home/brand-saya/brand-saya.component';
import { NavMenuComponent } from './landing-page/nav-menu/nav-menu.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BrandSayaComponent,
    NavMenuComponent
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
