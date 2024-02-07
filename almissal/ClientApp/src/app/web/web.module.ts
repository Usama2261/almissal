import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ClientServicesComponent } from './client-services/client-services.component';
import { WebComponent } from './web.component';


@NgModule({
  declarations: [WebComponent, NavMenuComponent, FooterComponent, ClientServicesComponent],
 // exports: [NavMenuComponent, FooterComponent, ClientServicesComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    //SharedModule,

  ],
})
export class WebModule {}
