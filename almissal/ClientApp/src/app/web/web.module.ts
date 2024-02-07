import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { NavMenuComponent } from './landing-page/nav-menu/nav-menu.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { ClientServicesComponent } from './landing-page/client-services/client-services.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NavMenuComponent,
    FooterComponent,
    ClientServicesComponent,
  ],
  exports: [
    NavMenuComponent,
    FooterComponent,
    ClientServicesComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    LandingPageModule,
    HomeModule,
    SharedModule
  ]
})
export class WebModule { }
